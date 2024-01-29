import { Hover, HoverParams, MarkupKind } from "vscode-languageserver";
import { getAST } from "../ast";
import { getNodeAtPosition } from "../definition";
import { logTable, wrapInCodeBlocks } from "../utilities";

function fixTableFieldsIndentation(rawValue: string): string {
	if (rawValue.length === 0) {
		return rawValue;
	}

	let indent = 0;
	return rawValue.split("\n").map(line => {
		if (line.indexOf("}") !== -1) {
			indent--;
		}

		line = `${"\t".repeat(indent)}${line.trim()}`;

		if (line.indexOf("{") !== -1) {
			indent++;
		}

		return line;
	}).join("\n");
}

export function onHover(hoverParams: HoverParams): Hover | undefined {
	const ast = getAST(hoverParams.textDocument.uri, false);
	if (!ast) {
		return;
	}

	const result = getNodeAtPosition(hoverParams.position, ast);
	if (!result) {
		return;
	}

	return {
		contents: {
			kind: MarkupKind.Markdown,
			value: wrapInCodeBlocks(fixTableFieldsIndentation(result.RawValue)),
		},
		range: result.ReferenceLocation,
	};
}
