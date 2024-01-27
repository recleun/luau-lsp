import { Position, URI } from "vscode-languageserver";
import { IfStatement } from "./parse-types";
import { ForLoop } from "./ast/parse/for-loops";
import { TypeDefinition, VariableDeclaration } from "./ast/parse/possible-type";

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

export * from "./ast/parse/reference";
export * from "./ast/parse/possible-type";
export * from "./ast/parse/function-types";
export * from "./ast/parse/for-loops";
export * from "./ast/parse/if-statements";
export * from "./ast/env/api-dump";
export * from "./ast/env/data-types";
