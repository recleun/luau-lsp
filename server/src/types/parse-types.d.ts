import { Position, Range, URI } from "vscode-languageserver";
import { IfStatement } from "./parse-types";
import { ForLoop } from "./parse/for-loops";
import { TypeDefinition, Value } from "./parse/possible-type";

export interface VariableDeclaration {
	Type: "Variable Declaration",
	VariableName: string,
	IsGlobal: boolean,
	VariableType: TypeDefinition,
	VariableValue: Value,
	RawValue: string,
	References: Reference[],
}

export interface Reference {
	Start: Position,
	End: Position,
	FileUri: URI
}

export interface ASTNode {
	Start?: Position,
	End?: Position,
}

export type PossibleTokens =
	VariableDeclaration |
	TypeDefinition |
	ForLoop |
	IfStatement

export type AstToken = ASTNode & PossibleTokens

export type AstTokens = AstToken[];
export interface AST {
	Tokens: AstTokens,
	Uri?: URI,
	Parent?: AST,
}

export * from "./parse/possible-type";
export * from "./parse/function-types";
export * from "./parse/for-loops";
export * from "./parse/if-statements";
