import {
	CompletionItem,
	InsertTextFormat,
	InsertTextMode,
	MarkupKind,
	TextDocumentPositionParams,
	TextDocuments
} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { getAST } from "../ast";
import { log, logTable, toString, tryGetFinalValue, wrapInCodeBlocks } from "../utilities";
import { TableField, TableFields } from "../types";

function getTextBeforeCursor(input: string): string {
	let text = "";
	const splits = (input.replace(/ *?$/, "") + " ").split(" ").reverse();

	for (let i = 0; i < splits.length; i++) {
		const element = splits[i];
		if (i > 1 && !element.match(/[.:]$/)) { break; }

		text = element + text;
	}

	return text;
}

export function getCompletionItems(documents: TextDocuments<TextDocument>, textDocumentPosition: TextDocumentPositionParams): CompletionItem[] {
	const document = documents.get(textDocumentPosition.textDocument.uri);
	if (!document) { return []; }

	const items: CompletionItem[] = [];
	const parsedTokens = getAST(document).Tokens;

	const text = document.getText();
	const line = text.split("\n")[textDocumentPosition.position.line];
	const trimmedLine = line.trim();
	const textBeforeCursor = getTextBeforeCursor(trimmedLine.substring(0, textDocumentPosition.position.character));

	const isTableField = (
		textBeforeCursor.indexOf(".") !== -1 ||
		textBeforeCursor.indexOf(":") !== -1
	);

	parsedTokens.forEach(token => {
		if (token.Type !== "Variable Declaration") { return; }

		if (isTableField) {
			if (token.VariableValue.Value.Type !== "Table") { return; }

			const tableName = textBeforeCursor.match(/^(.*?)[.:]/);
			if (tableName && token.VariableName !== tableName[1]) { return; }

			const values = tryGetFinalValue(textBeforeCursor, token.VariableValue.Value.Value);

			for (const value of values) {
				const key = toString(value.Key);

				items.push({
					label: key,
					documentation: {
						kind: MarkupKind.Markdown,
						value: wrapInCodeBlocks(toString(value, " =", token.VariableName !== "Enum"))
					},
					insertTextFormat: InsertTextFormat.Snippet,
					insertTextMode: InsertTextMode.adjustIndentation,
					detail: value.Value.Type === "Type"? value.Value.RawValue: "",
				});
			}
		} else {
			items.push({
				label: token.VariableName,
				documentation: {
					kind: MarkupKind.Markdown,
					value: wrapInCodeBlocks(token.RawValue)
				},
				insertTextFormat: InsertTextFormat.Snippet,
				insertTextMode: InsertTextMode.adjustIndentation,
				detail: token.VariableType.TypeName,
			});
		}
	});

	return items;
}