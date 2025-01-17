import { Logger } from '@map-colonies/js-logger';
import { AxiosRequestConfig } from 'axios';
import { RecordUpdatePartial } from '../../graphql/inputTypes';
import { requestHandler } from '../../utils';
import { IConfig, IContext } from '../interfaces';
import { ICatalogManagerService } from './catalog-manager.interface';

export class CatalogManagerRaster implements ICatalogManagerService {
  private readonly serviceURL: string = '';

  public constructor(private readonly config: IConfig, private readonly logger: Logger) {
    this.serviceURL = this.config.get('catalogServices.raster.url');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async updateStatus(record: RecordUpdatePartial, ctx: IContext): Promise<RecordUpdatePartial> {
    return Promise.reject('Unimplemented service');
  }

  public async updateMetadata(record: RecordUpdatePartial, ctx: IContext): Promise<RecordUpdatePartial> {
    await requestHandler(`${this.serviceURL}/records/${record.id}`, 'PUT', this.buildPayload(record), ctx);
    return record;
  }

  private buildPayload(data: RecordUpdatePartial): AxiosRequestConfig {
    const payloadData = {
      ...data.partialRecordData,
    };

    this.logger.info(`[CatalogManagerRaster][buildPayload] generated payload: ${JSON.stringify(payloadData)}.`);

    return {
      data: {
        metadata: {
          ...payloadData,
        },
      },
    };
  }
}
