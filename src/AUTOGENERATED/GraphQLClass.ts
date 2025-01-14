/* This file was auto-generated by MC-GENERATOR, DO NOT modify it manually */
/* eslint-disable import/exports-last, @typescript-eslint/naming-convention */
import { InputType, ObjectType, Field, Resolver, registerEnumType } from "type-graphql";
import { GraphQLScalarType } from "graphql";
import { RecordType, ProductType, RecordStatus, VerticalDatum, Units, UndulationModel, DataType, NoDataValue } from "@map-colonies/mc-model-types";

@InputType()
export class LinkInput {
    @Field({ nullable: true })
    public name?: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public protocol: string;
    @Field({ nullable: false })
    public url: string;
}

@InputType()
export class DiscreteOrderInput {
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: false })
    public zOrder: number;
}

@InputType()
export class LayerRasterRecordInput {
    @Field({ nullable: false })
    public id: string;
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productName: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public ingestionDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field({ nullable: true })
    public minHorizontalAccuracyCE90?: number;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: true })
    public productId?: string;
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: true })
    public productSubType?: string;
    @Field({ nullable: false })
    public srsName: string;
    @Field({ nullable: true })
    public maxResolutionDeg?: number;
    @Field({ nullable: true })
    public maxResolutionMeter?: number;
    @Field({ nullable: true })
    public rms?: number;
    @Field({ nullable: true })
    public scale?: number;
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field((type) => layerPolygonPartsObject, { nullable: true })
    public layerPolygonParts?: Record<string, unknown>;
    @Field((type) => [String], { nullable: true })
    public includedInBests?: string[];
    @Field({ nullable: true })
    public productBoundingBox?: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [LinkInput], { nullable: true })
    public links?: LinkInput[];
}

export const footprintObject = new GraphQLScalarType({ name: "footprintObject"});
export const layerPolygonPartsObject = new GraphQLScalarType({ name: "layerPolygonPartsObject"});

@InputType()
export class Layer3DRecordInput {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: true })
    public productId?: string;
    @Field({ nullable: false })
    public productName: string;
    // ASSAF: SHOULD REMAIN STRING
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field({ nullable: true })
    public minResolutionMeter?: number;
    @Field({ nullable: true })
    public maxResolutionMeter?: number;
    @Field({ nullable: false })
    public maxAccuracyCE90: number;
    @Field({ nullable: false })
    public absoluteAccuracyLE90: number;
    @Field({ nullable: true })
    public accuracySE90?: number;
    @Field({ nullable: true })
    public relativeAccuracySE90?: number;
    @Field({ nullable: true })
    public visualAccuracy?: number;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field({ nullable: true })
    public heightRangeFrom?: number;
    @Field({ nullable: true })
    public heightRangeTo?: number;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public srsName: string;
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productionSystem: string;
    @Field({ nullable: false })
    public productionSystemVer: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public minFlightAlt?: number;
    @Field({ nullable: true })
    public maxFlightAlt?: number;
    @Field({ nullable: true })
    public geographicArea?: string;
    @Field({ nullable: true })
    public productBoundingBox?: string;
    @Field({ nullable: true })
    public productSource?: string;
    @Field((type) => RecordStatus, { nullable: true })
    public productStatus?: RecordStatus;
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public wktGeometry?: string;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [LinkInput], { nullable: true })
    public links?: LinkInput[];
}

@InputType()
export class BestRecordInput {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productName: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public ingestionDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field({ nullable: true })
    public minHorizontalAccuracyCE90?: number;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: true })
    public productId?: string;
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: false })
    public srsName: string;
    @Field({ nullable: true })
    public maxResolutionDeg?: number;
    @Field({ nullable: true })
    public rms?: number;
    @Field({ nullable: true })
    public scale?: number;
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field((type) => layerPolygonPartsObject, { nullable: true })
    public layerPolygonParts?: Record<string, unknown>;
    @Field((type) => [DiscreteOrderInput], { nullable: true })
    public discretes?: DiscreteOrderInput[];
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [LinkInput], { nullable: true })
    public links?: LinkInput[];
}

@InputType()
export class LayerDemRecordInput {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productName: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public srsName: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: true })
    public productId?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field({ nullable: false })
    public absoluteAccuracyLEP90: number;
    @Field({ nullable: true })
    public relativeAccuracyLEP90?: number;
    @Field({ nullable: true })
    public resolutionDegree?: number;
    @Field({ nullable: false })
    public resolutionMeter: number;
    @Field((type) => layerPolygonPartsObject, { nullable: true })
    public layerPolygonParts?: Record<string, unknown>;
    @Field({ nullable: true })
    public productBoundingBox?: string;
    @Field({ nullable: true })
    public heightRangeFrom?: number;
    @Field({ nullable: true })
    public heightRangeTo?: number;
    @Field((type) => VerticalDatum, { nullable: false })
    public verticalDatum: VerticalDatum;
    @Field((type) => Units, { nullable: true })
    public units?: Units;
    @Field({ nullable: true })
    public geographicArea?: string;
    @Field((type) => UndulationModel, { nullable: false })
    public undulationModel: UndulationModel;
    @Field((type) => DataType, { nullable: false })
    public dataType: DataType;
    @Field((type) => NoDataValue, { nullable: false })
    public noDataValue: NoDataValue;
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public wktGeometry?: string;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [LinkInput], { nullable: true })
    public links?: LinkInput[];
}

@InputType()
export class VectorBestRecordInput {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productName: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public ingestionDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: false })
    public srsName: string;
    @Field({ nullable: true })
    public scale?: number;
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [LinkInput], { nullable: true })
    public links?: LinkInput[];
}

@InputType()
export class QuantizedMeshBestRecordInput {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: true })
    public productId?: string;
    @Field({ nullable: false })
    public productName: string;
    // ASSAF: SHOULD REMAIN STRING
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field({ nullable: true })
    public minResolutionMeter?: number;
    @Field({ nullable: true })
    public maxResolutionMeter?: number;
    @Field({ nullable: false })
    public maxAccuracyCE90: number;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field({ nullable: true })
    public heightRangeFrom?: number;
    @Field({ nullable: true })
    public heightRangeTo?: number;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public srsName: string;
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productionSystem: string;
    @Field({ nullable: false })
    public productionSystemVer: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public geographicArea?: string;
    @Field({ nullable: true })
    public productBoundingBox?: string;
    @Field({ nullable: true })
    public productSource?: string;
    @Field((type) => RecordStatus, { nullable: true })
    public productStatus?: RecordStatus;
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public wktGeometry?: string;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [LinkInput], { nullable: true })
    public links?: LinkInput[];
}

@ObjectType()
export class Link {
    @Field({ nullable: true })
    public name?: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public protocol: string;
    @Field({ nullable: false })
    public url: string;
}

@ObjectType()
export class DiscreteOrder {
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: false })
    public zOrder: number;
}

@ObjectType()
export class LayerRasterRecord {
    @Field({ nullable: false })
    public id: string;
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productName: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public ingestionDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field({ nullable: true })
    public minHorizontalAccuracyCE90?: number;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: true })
    public productId?: string;
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: true })
    public productSubType?: string;
    @Field({ nullable: false })
    public srsName: string;
    @Field({ nullable: true })
    public maxResolutionDeg?: number;
    @Field({ nullable: true })
    public maxResolutionMeter?: number;
    @Field({ nullable: true })
    public rms?: number;
    @Field({ nullable: true })
    public scale?: number;
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field((type) => layerPolygonPartsObject, { nullable: true })
    public layerPolygonParts?: Record<string, unknown>;
    @Field((type) => [String], { nullable: true })
    public includedInBests?: string[];
    @Field({ nullable: true })
    public productBoundingBox?: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [Link], { nullable: true })
    public links?: Link[];
}

@ObjectType()
export class Layer3DRecord {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: true })
    public productId?: string;
    @Field({ nullable: false })
    public productName: string;
    // ASSAF: SHOULD REMAIN STRING
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field({ nullable: true })
    public minResolutionMeter?: number;
    @Field({ nullable: true })
    public maxResolutionMeter?: number;
    @Field({ nullable: false })
    public maxAccuracyCE90: number;
    @Field({ nullable: false })
    public absoluteAccuracyLE90: number;
    @Field({ nullable: true })
    public accuracySE90?: number;
    @Field({ nullable: true })
    public relativeAccuracySE90?: number;
    @Field({ nullable: true })
    public visualAccuracy?: number;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field({ nullable: true })
    public heightRangeFrom?: number;
    @Field({ nullable: true })
    public heightRangeTo?: number;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public srsName: string;
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productionSystem: string;
    @Field({ nullable: false })
    public productionSystemVer: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public minFlightAlt?: number;
    @Field({ nullable: true })
    public maxFlightAlt?: number;
    @Field({ nullable: true })
    public geographicArea?: string;
    @Field({ nullable: true })
    public productBoundingBox?: string;
    @Field({ nullable: true })
    public productSource?: string;
    @Field((type) => RecordStatus, { nullable: true })
    public productStatus?: RecordStatus;
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public wktGeometry?: string;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [Link], { nullable: true })
    public links?: Link[];
}

@ObjectType()
export class BestRecord {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productName: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public ingestionDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field({ nullable: true })
    public minHorizontalAccuracyCE90?: number;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: true })
    public productId?: string;
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: false })
    public srsName: string;
    @Field({ nullable: true })
    public maxResolutionDeg?: number;
    @Field({ nullable: true })
    public rms?: number;
    @Field({ nullable: true })
    public scale?: number;
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field((type) => layerPolygonPartsObject, { nullable: true })
    public layerPolygonParts?: Record<string, unknown>;
    @Field((type) => [DiscreteOrder], { nullable: true })
    public discretes?: DiscreteOrder[];
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [Link], { nullable: true })
    public links?: Link[];
}

@ObjectType()
export class LayerDemRecord {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productName: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public srsName: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: true })
    public productId?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field({ nullable: false })
    public absoluteAccuracyLEP90: number;
    @Field({ nullable: true })
    public relativeAccuracyLEP90?: number;
    @Field({ nullable: true })
    public resolutionDegree?: number;
    @Field({ nullable: false })
    public resolutionMeter: number;
    @Field((type) => layerPolygonPartsObject, { nullable: true })
    public layerPolygonParts?: Record<string, unknown>;
    @Field({ nullable: true })
    public productBoundingBox?: string;
    @Field({ nullable: true })
    public heightRangeFrom?: number;
    @Field({ nullable: true })
    public heightRangeTo?: number;
    @Field((type) => VerticalDatum, { nullable: false })
    public verticalDatum: VerticalDatum;
    @Field((type) => Units, { nullable: true })
    public units?: Units;
    @Field({ nullable: true })
    public geographicArea?: string;
    @Field((type) => UndulationModel, { nullable: false })
    public undulationModel: UndulationModel;
    @Field((type) => DataType, { nullable: false })
    public dataType: DataType;
    @Field((type) => NoDataValue, { nullable: false })
    public noDataValue: NoDataValue;
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public wktGeometry?: string;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [Link], { nullable: true })
    public links?: Link[];
}

@ObjectType()
export class VectorBestRecord {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productName: string;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public ingestionDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: false })
    public srsName: string;
    @Field({ nullable: true })
    public scale?: number;
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [Link], { nullable: true })
    public links?: Link[];
}

@ObjectType()
export class QuantizedMeshBestRecord {
    @Field((type) => RecordType, { nullable: true })
    public type?: RecordType;
    @Field({ nullable: true })
    public productId?: string;
    @Field({ nullable: false })
    public productName: string;
    // ASSAF: SHOULD REMAIN STRING
    @Field({ nullable: true })
    public productVersion?: string;
    @Field((type) => ProductType, { nullable: false })
    public productType: ProductType;
    @Field({ nullable: true })
    public description?: string;
    @Field({ nullable: true })
    public creationDate?: Date;
    @Field({ nullable: true })
    public updateDate?: Date;
    @Field({ nullable: false })
    public sourceDateStart: Date;
    @Field({ nullable: false })
    public sourceDateEnd: Date;
    @Field({ nullable: true })
    public minResolutionMeter?: number;
    @Field({ nullable: true })
    public maxResolutionMeter?: number;
    @Field({ nullable: false })
    public maxAccuracyCE90: number;
    @Field((type) => [String], { nullable: false })
    public sensors: string[];
    @Field((type) => footprintObject, { nullable: false })
    public footprint: Record<string, unknown>;
    @Field({ nullable: true })
    public heightRangeFrom?: number;
    @Field({ nullable: true })
    public heightRangeTo?: number;
    @Field({ nullable: false })
    public srsId: string;
    @Field({ nullable: false })
    public srsName: string;
    @Field((type) => [String], { nullable: false })
    public region: string[];
    @Field({ nullable: false })
    public classification: string;
    @Field({ nullable: false })
    public productionSystem: string;
    @Field({ nullable: false })
    public productionSystemVer: string;
    @Field({ nullable: false })
    public producerName: string;
    @Field({ nullable: true })
    public geographicArea?: string;
    @Field({ nullable: true })
    public productBoundingBox?: string;
    @Field({ nullable: true })
    public productSource?: string;
    @Field((type) => RecordStatus, { nullable: true })
    public productStatus?: RecordStatus;
    @Field({ nullable: false })
    public id: string;
    @Field({ nullable: true })
    public insertDate?: Date;
    @Field({ nullable: true })
    public wktGeometry?: string;
    @Field({ nullable: true })
    public keywords?: string;
    @Field((type) => [Link], { nullable: true })
    public links?: Link[];
}

@Resolver(Link)
export class LinkResolver {
}

@Resolver(DiscreteOrder)
export class DiscreteOrderResolver {
}

@Resolver(LayerRasterRecord)
export class LayerRasterRecordResolver {
}

@Resolver(Layer3DRecord)
export class Layer3DRecordResolver {
}

@Resolver(BestRecord)
export class BestRecordResolver {
}

@Resolver(LayerDemRecord)
export class LayerDemRecordResolver {
}

@Resolver(VectorBestRecord)
export class VectorBestRecordResolver {
}

@Resolver(QuantizedMeshBestRecord)
export class QuantizedMeshBestRecordResolver {
}

const RecordTypeRegister = registerEnumType(RecordType, {name: "RecordType"});
const ProductTypeRegister = registerEnumType(ProductType, {name: "ProductType"});
const RecordStatusRegister = registerEnumType(RecordStatus, {name: "RecordStatus"});
const VerticalDatumRegister = registerEnumType(VerticalDatum, {name: "VerticalDatum"});
const UnitsRegister = registerEnumType(Units, {name: "Units"});
const UndulationModelRegister = registerEnumType(UndulationModel, {name: "UndulationModel"});
const DataTypeRegister = registerEnumType(DataType, {name: "DataType"});
const NoDataValueRegister = registerEnumType(NoDataValue, {name: "NoDataValue"});

export const enumUnionValues = { RecordType, ProductType, RecordStatus, VerticalDatum, Units, UndulationModel, DataType, NoDataValue };
export type EnumUnionKeys = keyof typeof enumUnionValues;
const enumsNames = Object.keys(enumUnionValues);

export interface TMCEnums {
    [unionEnumKey: string]: {
        enumName: string,
        realValue: string,
        icon: string,
        translationKey: string,
        parent: string,
        internal: boolean,
        properties: Record<string, unknown>,
    }
};

export const mcEnums = Object.values({ ...enumUnionValues }).reduce((enumValues, mcEumValue, i) => {
    Object.entries(mcEumValue).forEach(([enumKey, enumVal]) => {
        enumValues = {
            ...enumValues,
            [enumKey]: {
                enumName: enumsNames[i],
                realValue: enumVal as string,
                icon: "",
                translationKey: "",
                parent: "",
                internal: false,
                properties: {}
            }
        };
    });
    return enumValues;
}, {} as TMCEnums);
