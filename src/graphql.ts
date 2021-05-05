import { Resolver, Query, createUnionType, NonEmptyArray } from 'type-graphql';
import { Layer3DRecord, LayerRasterRecord } from './AUTOGENERATED/GraphQLClass';

type LayerMetadataUnionType = LayerRasterRecord | Layer3DRecord;

@Resolver()
class LayerMetadataMixedResolver {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((type) => [LayerMetadataMixedUnion])
  public async search(): Promise<LayerMetadataUnionType[]> {
    // TODO: implement CSW client functionality
    // TODO: implement XML-like parse from CSW model
    const data = await Promise.resolve([]);
    return data;
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const LayerMetadataMixedUnion = createUnionType({
  name: 'LayerMetadataMixed',
  types: () => [LayerRasterRecord, Layer3DRecord] as const,
  resolveType: (value) => {
    // TODO: determine record type by mc models enum
    if ('accuracyLE90' in value) {
      return Layer3DRecord;
    } else {
      return LayerRasterRecord;
    }
  },
}) as LayerMetadataUnionType;

// eslint-disable-next-line @typescript-eslint/ban-types
export function getResolvers(): NonEmptyArray<Function> | NonEmptyArray<string> {
  return [LayerMetadataMixedResolver];
}
