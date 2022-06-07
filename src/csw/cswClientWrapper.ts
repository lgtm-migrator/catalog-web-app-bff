import { transform, mapKeys, mapValues, get } from 'lodash';
import { GeometryObject, lineString, Polygon, Position } from '@turf/helpers';
import bbox from '@turf/bbox';
import bboxPolygon from '@turf/bbox-polygon';
import { CswClient, IRequestExecutor } from '@map-colonies/csw-client';
import { IPropPYCSWMapping, RecordType } from '@map-colonies/mc-model-types';
import { Link } from '../AUTOGENERATED/GraphQLClass';
import { CatalogRecordType, fieldTypes } from '../common/constants';
import { SearchOptions } from '../graphql/inputTypes';
import { requestHandlerWithToken } from '../utils';

const MINUS_NINETY = -90;
const DELTA = 0.0001;

export class CswClientWrapper {
  private readonly typename: string;
  private readonly outputSchema: string;
  private readonly cswClient: CswClient;
  private readonly pyCSWKeys: IPropPYCSWMapping[];

  public constructor(typename: string, pyCSWKeys: IPropPYCSWMapping[], outputSchema: string, cswUrl: string, request?: IRequestExecutor) {
    this.typename = typename;
    this.outputSchema = outputSchema;
    this.cswClient = new CswClient(cswUrl, request ?? requestHandlerWithToken);
    this.pyCSWKeys = pyCSWKeys;
  }

  public async getRecords(start?: number, end?: number, opts?: SearchOptions): Promise<CatalogRecordType[]> {
    // eslint-disable-next-line
    let data = (await this.cswClient.GetRecords(this.outputSchema, start, end, opts))?.[this.typename];
    if (data === undefined) {
      return [];
    }
    data = Array.isArray(data) ? data : [data];
    const parsedData = this.transformRecordsToEntity(data);
    return parsedData;
  }

  public async getRecordsById(idList: string[]): Promise<CatalogRecordType[]> {
    // eslint-disable-next-line
    let data = (await this.cswClient.GetRecordsById(this.outputSchema, idList))?.[this.typename];
    if (data === undefined) {
      return [];
    }
    data = Array.isArray(data) ? data : [data];
    const parsedData = this.transformRecordsToEntity(data);
    return parsedData;
  }

  public async getDomain(domain: string): Promise<string[]> {
    // eslint-disable-next-line
    let domainResp = (await this.cswClient.GetDomain(domain))?.['csw:GetDomainResponse'];
    if (domainResp === undefined) {
      return [];
    }
    const valList = get(domainResp, 'domainValues[0].listOfValues.value') as Record<string, unknown>[];
    const parsedData = valList.map((val) => get(val, 'content[0]') as string);

    return parsedData;
  }

  public transformRecordsToEntity = (cswArray: CatalogRecordType[]): CatalogRecordType[] => {
    const { isDate, isDiscrete, isFootprint, isKeywords, isLayerPolygonParts, isLinks, isSensor, isRegion } = fieldTypes;

    const fixFootprint = (footprint: GeometryObject): GeometryObject => {
      switch (footprint.type) {
        case 'Polygon':
          (footprint as Polygon).coordinates.forEach((tupleArray: Position[]): void => {
            tupleArray.forEach((tuple: Position): void => {
              if (tuple[1] === MINUS_NINETY) {
                tuple[1] += DELTA;
              }
            });
          });
          break;
        default:
          // Decided not to fix other types, assuming in MultiPolygon we will not have -90 values
          break;
      }
      return footprint;
    };

    const cswParsedArray = transform(
      cswArray,
      (result: Record<string, unknown>[], cswValue) => {
        const parsedKeys = mapKeys(cswValue, (value, key) => {
          const fixedKey = this.pyCSWKeys.find((cswMapping) => cswMapping.xmlElement === key)?.prop ?? key;
          return fixedKey;
        });
        const finalParsed = mapValues(parsedKeys, (val, key, obj) => {
          const recordType = get(obj, 'type') as RecordType;
          const SHOULD_SPECIAL_TREAT_FIELD = true;

          switch (SHOULD_SPECIAL_TREAT_FIELD) {
            case isFootprint(key): {
              return fixFootprint(JSON.parse(val as string));
            }
            case isLayerPolygonParts(key): {
              switch (recordType) {
                case RecordType.RECORD_RASTER:
                case RecordType.RECORD_DEM:
                  // eslint-disable-next-line
                  return JSON.parse(val as string);
                default:
                  return {};
              }
            }
            case isDiscrete(key): {
              switch (recordType) {
                case RecordType.RECORD_RASTER:
                  // eslint-disable-next-line
                  return JSON.parse(val as string);
                default:
                  return undefined;
              }
            }
            case isLinks(key): {
              const linksArr = Array.isArray(val) ? val : [val];
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const processedLinks = linksArr.map((item: any): Link => {
                return {
                  protocol: get(item, '$.scheme') as string,
                  name: get(item, '$.name') as string,
                  description: get(item, '$.description') as string,
                  url: get(item, '_') as string,
                };
              });
              return processedLinks;
            }
            case isDate(key):
              return new Date(val as string);
            case isKeywords(key):
              return val?.toString(); //might be an Array
            case isSensor(key):
              return val !== undefined ? (val as string).split(',') : [];
            case isRegion(key):
              return val !== undefined ? (val as string).split(',') : [];
            default:
              return val;
          }
        });
        result.push(finalParsed);
      },
      []
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return cswParsedArray;
  };
}
