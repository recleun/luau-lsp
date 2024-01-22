import { CustomArray } from "../global-types";
import { AST, Parameters, Returns } from "../parse-types";

export interface TableField {
	key: TableKey,
	value: ParsedType | ParsedValue,
}

export interface SimpleType {
	Type: "Simple",
	RawValue: string,
	Value: string,
}
export interface TableType {
	Type: "Table",
	RawValue: string,
	Value: TableFields,
}
export interface FunctionType {
	Type: "Function",
	RawValue: string,
	Value: { Parameters: Parameters, Returns: Returns },
	Body: AST
}

export type TableKey = ParsedType | ParsedValue | string
export type PossibleTypes = SimpleType | TableType | FunctionType

export interface Generic {
	Name: string,
	Variadic: boolean,
}

export interface ParsedType {
	Type: "Type",
	TypeName: string,
	TypeValue: {
		Type: PossibleTypes,
		AndTypes: ParsedType[],
		OrTypes: ParsedType[],
	}
	RawValue: string,
	IsExported: boolean,
	Generics: Generic[]
}

export interface ParsedValue {
	Type: "Value",
	Value: PossibleTypes,
}

export type TableFields = CustomArray<TableField, "TableFields">;