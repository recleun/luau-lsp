import {
	TypeDefinition,
	Value,
	Parameters,
	Returns,
	TableFields,
	TableField,
	PossibleTypes
} from "./types/parse-types";

export type ConvertableTypes = Parameters
	| Returns
	| TableField
	| TableFields
	| Value
	| TypeDefinition
	| string

export interface NormalizedExpression {
	Value: PossibleTypes,
	Type?: TypeDefinition,
}
export type NormalizedExpressions = NormalizedExpression[];

export interface NormalizedName {
	Name: string,
	Type?: TypeDefinition,
	IsTypeOptional: boolean,
}
export type NormalizedNames = NormalizedName[];

export * from "./types/api";
export * from "./types/parse-types";
export * from "./types/diagnostics";
