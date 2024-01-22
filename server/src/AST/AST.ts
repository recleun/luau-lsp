import { parseFile } from "./parse";
import { AST } from "../types";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-languageserver";
import { Constructors, Enums, globals } from "./env";

const ASTs: {[key: URI]: AST} = {};

export function generateAST(document: TextDocument) {
	const AST = parseFile(document, false);
	ASTs[document.uri] = {
		Tokens: [...AST.Tokens, Enums, ...Constructors, ...globals],
		Parent: AST.Parent,
	};
}

export function getAST(document: TextDocument) {
	if (!ASTs[document.uri]) { generateAST(document); }

	return ASTs[document.uri];
}