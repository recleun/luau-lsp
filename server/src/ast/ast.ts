import { parseFile } from "./parse";
import { AST } from "../types";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-languageserver";
import { Constructors, Enums, globals } from "./env";
import { logTable } from "../utilities";

const ASTs: { [key: URI]: AST } = {};

export function generateAST(parameter: TextDocument) {
	const AST = parseFile(parameter, true);
	ASTs[parameter.uri] = {
		Tokens: AST.Tokens, //[...AST.Tokens, Enums, ...Constructors, ...globals],
		Uri: parameter.uri,
		Parent: AST.Parent,
	};

	// logTable(ASTs[parameter.uri].Tokens);
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
