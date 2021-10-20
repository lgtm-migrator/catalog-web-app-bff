/* eslint-disable import/exports-last, @typescript-eslint/naming-convention */
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class StringArrayObjectType {
  @Field((type) => [String])
  public value: string[];
}
