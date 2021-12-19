/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Logger } from '@map-colonies/js-logger';
import { IConfig } from 'config';
import { container } from 'tsyringe';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { transform, mapKeys, mapValues, get } from 'lodash';
import { Services } from '../../common/constants';
import { requestHandler } from '../../utils';
import { JobsSearchParams, JobUpdateData, TasksSearchParams } from '../inputTypes';
import { Job, Task } from '../job';
import { MOCK_TASKS_DATA } from './MOCK_TASKS_DATA';

@Resolver()
export class TaskResolver {
  private readonly logger: Logger;
  private readonly config: IConfig;
  private readonly serviceURL: string = '';

  public constructor() {
    this.logger = container.resolve(Services.LOGGER);
    this.config = container.resolve(Services.CONFIG);
    this.serviceURL = this.config.get('jobServices.raster.url');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((type) => [Task])
  public async tasks(
    @Arg('params', { nullable: true })
    params?: TasksSearchParams
  ): Promise<Task[]> {
    try {
      // const data = await Promise.resolve(this.getTasks(params));
      const data = await Promise.resolve(MOCK_TASKS_DATA);
      //   return this.transformRecordsToEntity(data);
      return data;
    } catch (err) {
      this.logger.error(err as string);
      throw err;
    }
  }

  private async getTasks(params: TasksSearchParams): Promise<Job[]> {
    const res = await requestHandler(`${this.serviceURL}/tasks`, 'GET', {
      data: {
        ...params,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return res.data;
  }

  // TODO: Tasks grouping process here (?)
  //   private readonly transformRecordsToEntity = (cswArray: Job[]): Job[] => {
  //     return [{}] as Job[];
  //   };
}
