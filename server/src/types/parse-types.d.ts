import { Position, Range, URI } from "vscode-languageserver";
import {
	IfStatement,
	ForLoop,
	TypeDefinition,
	RepeatBlock,
	VariableDeclaration,
	WhileLoop,
} from "./parse-types";

export interface ASTNode {
	Start?: Position,
	End?: Position,
}
export type PossibleTokens =
	VariableDeclaration |
	TypeDefinition |
	ForLoop |
	IfStatement |
	RepeatBlock |
	WhileLoop

export type AstToken = ASTNode & PossibleTokens

export type AstTokens = AstToken[];
export interface AST {
	Tokens: AstTokens,
	Returns: TypeDefinition[],
	Uri?: URI,
	Parent?: AST,
}

export * from "./ast/parse/possible-type";
export * from "./ast/parse/function-types";
export * from "./ast/parse/for-loops";
export * from "./ast/parse/if-statements";
export * from "./ast/parse/repeat-blocks";
export * from "./ast/parse/while-loop";

export * from "./ast/parse/reference";
export * from "./ast/env/api-dump";
export * from "./ast/env/data-types";
