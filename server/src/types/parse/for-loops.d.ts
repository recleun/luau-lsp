import { AST, ParsedVariableDeclaration } from "../parse-types";
import { ParsedValue, TableType } from "./possible-type";

export interface Pairs {
	Type: "Pairs",
	Variables: ParsedVariableDeclaration[],
	// Table: TableType,
}

export interface Ipairs {
	Type: "Ipairs",
	Variables: ParsedVariableDeclaration[],
	// Table: TableType,
}

export interface Next {
	Type: "Next",
	Variables: ParsedVariableDeclaration[],
	// Table: TableType,
}

export interface Custom {
	Type: "Custom",
	Variables: ParsedVariableDeclaration[],
	// Table: TableType,
}

export interface Table {
	Type: "Table",
	Variables: ParsedVariableDeclaration[],
	// Table: TableType,
}

export interface ForIn {
	Type: "ForIn",
	Variables: ParsedVariableDeclaration[],
	Body: AST,
}

export interface ForNumeric {
	Type: "ForNumeric",
	LoopData: {
		Variable: ParsedVariableDeclaration,
		Start: ParsedValue,
		End: ParsedValue,
		Step: ParsedValue,
	},
	Body: AST,
}

export type ForLoop = ForIn | ForNumeric