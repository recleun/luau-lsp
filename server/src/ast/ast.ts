import { parseFile } from "./parse";
import { AST } from "../types";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-languageserver";
import { Constructors, Enums, globals } from "./env";
import { logTable } from "../utilities";

type AstWithGlobals = AST;
const ASTs: { [key: URI]: [AstWithGlobals, AST] } = {};

export function generateAST(parameter: TextDocument) {
	const AST = parseFile(parameter, false);
	ASTs[parameter.uri] = [
		{
			Tokens: [...AST.Tokens, Enums, ...Constructors, ...globals],
			Returns: AST.Returns,
			Uri: parameter.uri,
			Parent: AST.Parent
		},
		AST,
	];

	// logTable(ASTs[parameter.uri].Tokens);
}

export function getAST(document: TextDocument, includeGlobals: boolean): AST;
export function getAST(uri: URI, includeGlobals: boolean): AST | undefined;

export function getAST(parameter: TextDocument | URI, includeGlobals: boolean): AST | undefined {
	const index = includeGlobals ? 0 : 1;
	if (typeof parameter === "string") {
		return ASTs[parameter] ? ASTs[parameter][index] : undefined;

	} else {
		if (!ASTs[parameter.uri]) { generateAST(parameter); }

		return ASTs[parameter.uri][index];
	}
}
