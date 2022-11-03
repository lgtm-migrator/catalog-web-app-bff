/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { convertToJson, getTraversalObj } from 'fast-xml-parser';
import { xmlParserOptions } from '../common/constants';
import { Capability, ResourceURL } from '../graphql/capability';

export const xmlToCapabilities = (idList: string[], xmlData: string): Capability[] => {
  const traversalObj = getTraversalObj(xmlData, xmlParserOptions);
  const jsonObj = convertToJson(traversalObj, xmlParserOptions);
  const layerList = jsonObj?.Capabilities?.Contents?.Layer?.filter((layer: { [x: string]: any }) => idList.includes(layer['ows:Identifier']));
  const capabilityList: Capability[] = layerList?.map((layer: { [x: string]: any }) => ({
    id: layer['ows:Identifier'],
    style: layer['Style']['ows:Identifier'],
    format: layer['Format'],
    tileMatrixSetID: layer['TileMatrixSetLink'].map((link: { TileMatrixSet: string }) => link.TileMatrixSet),
    url: layer['ResourceURL'].map((resourceURL: { attr: ResourceURL }) => resourceURL.attr),
  }));
  return capabilityList ?? [];
};
