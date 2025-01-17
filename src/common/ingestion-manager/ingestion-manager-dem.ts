import { Logger } from '@map-colonies/js-logger';
import { IngestionData } from '../../graphql/inputTypes';
import { IConfig, IContext } from '../interfaces';
import { IIngestionManagerService } from './ingestion-manager.interface';

export class IngestionManagerDem implements IIngestionManagerService {
  private readonly serviceURL: string = '';

  public constructor(private readonly config: IConfig, private readonly logger: Logger) {
    this.serviceURL = this.config.get('ingestionServices.dem.url');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async ingest(data: IngestionData, ctx: IContext): Promise<IngestionData> {
    return Promise.reject('Unimplemented service');
  }
}
