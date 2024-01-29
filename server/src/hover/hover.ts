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
		const ignore = line.includes("{") && line.includes("}");
		if (!ignore) {
			let closeBracketsIndex = 0;
			if ((closeBracketsIndex = line.indexOf("}", closeBracketsIndex)) !== -1) {
				indent--;
			}
		}

		line = `${"\t".repeat(indent)}${line.trim()}`;

		if (!ignore) {
			let openBracketsIndex = 0;
			if ((openBracketsIndex = line.indexOf("{", openBracketsIndex)) !== -1) {
				indent++;
			}
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
