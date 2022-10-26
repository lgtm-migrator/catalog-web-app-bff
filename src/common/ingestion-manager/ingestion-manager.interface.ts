import { registerEnumType } from 'type-graphql';
import { IngestionData } from '../../graphql/inputTypes';

// eslint-disable-next-line import/exports-last
export interface IIngestionManagerService {
  ingest: (data: IngestionData) => Promise<IngestionData>;
  updateGeopkg?: (data: IngestionData) => Promise<IngestionData | null>;
}

// IngestionData related types

// eslint-disable-next-line import/exports-last
export enum ProductOpacity {
  TRANSPARENT = 'transparent',
  OPAQUE = 'opaque',
}

registerEnumType(ProductOpacity, { name: 'ProductOpacity' });
