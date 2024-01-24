import { DefinitionLink, DefinitionParams, Hover, MarkupKind, Position, Range } from "vscode-languageserver";
import { getCurrentUri } from "../diagnostics";
import { AST, ParsedVariableDeclaration, Reference, TableField, TableFieldType } from "../types";
import { log, logTable, tableFieldToString } from "../utilities";
import { getAST } from "../ast";

export function isInBounds(start: Position, end: Position, position: Position): boolean {
	return (
		start.line < position.line ||
		(start.line === position.line && start.character <= position.character)
	) && (
			end.line > position.line ||
			(end.line === position.line && end.character >= position.character)
		);
}

type NodeLocation = Range;
type ReferenceLocation = Range;
type VariableData = [
	ParsedVariableDeclaration | TableField | TableFieldType,
	NodeLocation,
	string,
	ReferenceLocation,
	Reference[]
]

export function getVariableAtPosition(position: Position, ast: AST): VariableData | undefined {
	for (const node of ast.Tokens) {
		if (!node.Start || !node.End) {
			continue;
		}

		const isHere = isInBounds(node.Start, node.End, position);
		if (!isHere) {
			if (node.Type === "Variable Declaration") {
				for (const reference of node.References) {
					if (reference.FileUri !== getCurrentUri()) {
						continue;
					}
					if (!isInBounds(reference.Start, reference.End, position)) {
						continue;
					}

					return [
						node,
						Range.create(node.Start, node.End),
						node.RawValue,
						Range.create(reference.Start, reference.End),
						node.References,
					];
				}

				if (node.VariableType.TypeValue.Type.Type === "Table") {
					for (const field of node.VariableType.TypeValue.Type.Value) {
						for (const reference of field.References) {
							if (reference.FileUri !== getCurrentUri()) {
								continue;
							}
							if (!isInBounds(reference.Start, reference.End, position)) {
								continue;
							}


							return [
								field,
								Range.create(field.Start!, field.End!),
								field.Value.RawValue,
								Range.create(reference.Start, reference.End),
								field.References,
							];
						}
					}

					continue;
				}
			}

			continue;
		}

		if (node.Type === "Variable Declaration") {
			if (node.VariableValue.Value.Type === "Function") {

				return getVariableAtPosition(position, node.VariableValue.Value.Body) || [
					node,
					Range.create(node.Start, node.End),
					node.RawValue,
					Range.create(node.Start, node.End),
					node.References,
				];
			} else if (node.VariableType.TypeValue.Type.Type === "Table") {
				for (const field of node.VariableType.TypeValue.Type.Value) {
					if (!field.Start || !field.End) {
						continue;
					}

					if (isInBounds(field.Start, field.End, position)) {
						return [
							field,
							Range.create(node.Start, node.End),
							tableFieldToString(field, " = ", false),
							Range.create(field.Start, field.End),
							field.References,
						];
					}
				}

				return [
					node,
					Range.create(node.Start, node.End),
					node.RawValue,
					Range.create(node.Start, node.End),
					node.References,
				];
			} else {
				return [
					node,
					Range.create(node.Start, node.End),
					node.RawValue,
					Range.create(node.Start, node.End),
					node.References,
				];
			}
		}

		return;
	}

	return;
}

export function onDefinition(params: DefinitionParams): DefinitionLink[] {
	const definitions: DefinitionLink[] = [];
	const ast = getAST(params.textDocument.uri);
	if (!ast) {
		return definitions;
	}

	const result = getVariableAtPosition(params.position, ast);
	if (!result) {
		return definitions;
	}

	if (isInBounds(result[1].start, result[1].end, params.position)) {
		result[4].forEach((reference) => {
			const referenceLocation = Range.create(reference.Start, reference.End);

			definitions.push({
				targetRange: referenceLocation,
				targetUri: params.textDocument.uri,
				targetSelectionRange: referenceLocation,
			});

		});
	} else {
		definitions.push({
			targetRange: result[1],
			targetUri: params.textDocument.uri,
			targetSelectionRange: result[1],
		});
	}

	return definitions;
}