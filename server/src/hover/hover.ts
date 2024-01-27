import { Hover, HoverParams, MarkupKind } from "vscode-languageserver";
import { getAST } from "../ast";
import { getNodeAtPosition } from "../definition";
import { wrapInCodeBlocks } from "../utilities";

export function onHover(hoverParams: HoverParams): Hover | undefined {
	const ast = getAST(hoverParams.textDocument.uri);
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
			value: wrapInCodeBlocks(result.RawValue),
		},
		range: result.ReferenceLocation,
	};
}
