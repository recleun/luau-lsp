import { parseFile } from "./parse";
import { AST } from "../types";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-languageserver";
import { Constructors, Enums, globals } from "./env";

const ASTs: { [key: URI]: AST } = {};

export function generateAST(parameter: TextDocument) {
	const AST = parseFile(parameter, false);
	ASTs[parameter.uri] = {
		Tokens: [...AST.Tokens, Enums, ...Constructors, ...globals],
		Uri: parameter.uri,
		Parent: AST.Parent,
	};
}

export function getAST(document: TextDocument): AST;
export function getAST(uri: URI): AST | undefined;

export function getAST(parameter: TextDocument | URI) {
	if (typeof parameter === "string") {
		return ASTs[parameter];

	} else {
		if (!ASTs[parameter.uri]) { generateAST(parameter); }

		return ASTs[parameter.uri];
	}
}
