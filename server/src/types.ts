import {
	ParsedType,
	ParsedValue,
	Parameters,
	Returns,
	TableFields,
	TableField,
	PossibleTypes
} from "./types/parse-types";
import { RawTokens } from "./types/token-types";

export type GetValueFunction = (tokens: RawTokens) => [ParsedType | ParsedValue, number];
export type ConvertableTypes = Parameters
	| Returns
	| TableField
	| TableFields
	| ParsedValue
	| ParsedType
	| string

export interface NormalizedExpression {
	Value: PossibleTypes,
	Type?: PossibleTypes,
}
export type NormalizedExpressions = NormalizedExpression[];

export interface NormalizedName {
	Name: string,
	Type?: PossibleTypes,
	IsTypeOptional: boolean,
}
export type NormalizedNames = NormalizedName[];

export * from "./types/token-types";
export * from "./types/parse-types";
// export * from "./types/api/DataTypes";
// export * from "./types/api/ApiDump";
