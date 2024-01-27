import { Position, URI } from "vscode-languageserver";
import { ASTNode } from "../../parse-types";

export interface Reference {
	Start: Position,
	End: Position,
	FileUri: URI,
}

export interface Referenceable {
	References: Reference[],
	NameStart?: Position,
	NameEnd?: Position,
}

export type ReferenceableASTNode = ASTNode & Referenceable
