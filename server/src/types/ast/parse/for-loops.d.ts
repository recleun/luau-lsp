import { AST, VariableDeclaration } from "../../parse-types";
import { Value, TableType } from "./possible-type";

export interface Pairs {
	Type: "Pairs",
	Variables: VariableDeclaration[],
	// Table: TableType,
}

export interface Ipairs {
	Type: "Ipairs",
	Variables: VariableDeclaration[],
	// Table: TableType,
}

export interface Next {
	Type: "Next",
	Variables: VariableDeclaration[],
	// Table: TableType,
}

export interface Custom {
	Type: "Custom",
	Variables: VariableDeclaration[],
	// Table: TableType,
}

export interface Table {
	Type: "Table",
	Variables: VariableDeclaration[],
	// Table: TableType,
}

export interface ForIn {
	Type: "ForIn",
	Variables: VariableDeclaration[],
	Body: AST,
}

export interface ForNumeric {
	Type: "ForNumeric",
	LoopData: {
		Variable: VariableDeclaration,
		Start: Value,
		End: Value,
		Step: Value,
	},
	Body: AST,
}

export type ForLoop = ForIn | ForNumeric