import { CustomArray } from "../global-types";
import { AST, Parameters, ReferenceableASTNode, Referenceable, Returns } from "../parse-types";

interface TableFieldBase extends ReferenceableASTNode {
	Key: TableKey,
}
export interface TableField extends TableFieldBase {
	Value: PossibleTypes,
	Type: TypeDefinition,
}
export interface TableFieldType extends TableFieldBase {
	Value: TypeDefinition,
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
	Body: AST,
}

export type TableKey = TypeDefinition | Value | string
export type PossibleTypes = SimpleType | TableType | FunctionType

export interface Generic {
	Name: string,
	Variadic: boolean,
}

export interface Type {
	Type: PossibleTypes,
	AndTypes: TypeDefinition[],
	OrTypes: TypeDefinition[],
}

export interface TypeDefinition extends Referenceable {
	Type: "Type",
	TypeName: string,
	TypeValue: Type,
	RawValue: string,
	IsExported: boolean,
	Generics: Generic[],
}

export interface Value {
	Type: "Value",
	Value: PossibleTypes,
}

export type TableFields = CustomArray<TableField | TableFieldType, "TableFields">;