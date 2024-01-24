import { Hover, HoverParams, MarkupKind } from "vscode-languageserver";
import { getAST } from "../ast";
import { getVariableAtPosition } from "../definition";
import { wrapInCodeBlocks } from "../utilities";

export function onHover(hoverParams: HoverParams): Hover | undefined {
	const ast = getAST(hoverParams.textDocument.uri);
	if (!ast) {
		return;
	}

	const result = getVariableAtPosition(hoverParams.position, ast);
	if (!result) {
		return;
	}

	return {
		contents: {
			kind: MarkupKind.Markdown,
			value: wrapInCodeBlocks(result[2]),
		},
		range: result[3],
	};
}
