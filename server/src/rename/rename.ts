import { Range, RenameParams, WorkspaceEdit } from "vscode-languageserver";
import { getNodeAtPosition } from "../definition";
import { getCurrentUri } from "../diagnostics";
import { getAST } from "../ast";

export function onRename(params: RenameParams): WorkspaceEdit | null | undefined {
	const ast = getAST(	params.textDocument.uri, true);
	if (!ast || !ast.Uri) {
		// AST wasn't found or it has no URI, having no URI means it isn't
		// made by the user but rather one of the files used by this LSP for
		// type definitions.
		return;
	}

	const variableData = getNodeAtPosition(params.position, ast);
	if (!variableData) {
		return;
	}

	const edit: WorkspaceEdit = {
		changes: {
			[ast.Uri]: [],
		},
	};

	edit.changes![ast.Uri].push({
		newText: params.newName,
		range: Range.create(variableData.NodeNameLocation.start, variableData.NodeNameLocation.end),
	});
	variableData.References.forEach((reference) => {
		edit.changes![reference.FileUri] = edit.changes![reference.FileUri] || [];

		edit.changes![reference.FileUri].push({
			newText: params.newName,
			range: Range.create(reference.Start, reference.End),
		});
	});

	return edit;
}