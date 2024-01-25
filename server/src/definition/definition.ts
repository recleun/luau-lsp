import { DefinitionLink, DefinitionParams, Hover, MarkupKind, Position, Range } from "vscode-languageserver";
import { getCurrentUri } from "../diagnostics";
import { AST, VariableDeclaration, Reference, TableField, TableFieldType } from "../types";
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

interface VariableData {
	Node: VariableDeclaration | TableField | TableFieldType,
	NodeLocation: Range,
	NodeNameLocation: Range,
	RawValue: string,
	ReferenceLocation: Range,
	References: Reference[],
}

export function getVariableAtPosition(position: Position, ast: AST): VariableData | undefined {
	for (const node of ast.Tokens) {
		if (!node.Start || !node.End) {
			continue;
		}

		const isHere = isInBounds(node.Start, node.End, position);
		if (!isHere) {
			if (node.Type === "Variable Declaration") {
				for (const reference of node.References) {
					if (!node.NameStart || !node.NameEnd) {
						continue;
					}
					if (reference.FileUri !== getCurrentUri()) {
						continue;
					}
					if (!isInBounds(reference.Start, reference.End, position)) {
						continue;
					}

					return {
						Node: node,
						NodeLocation: Range.create(node.Start, node.End),
						NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
						RawValue: node.RawValue,
						ReferenceLocation: Range.create(reference.Start, reference.End),
						References: node.References,
					};
				}

				if (node.VariableType.TypeValue.Type.Type === "Table") {
					for (const field of node.VariableType.TypeValue.Type.Value) {
						for (const reference of field.References) {
							if (!field.NameStart || !field.NameEnd) {
								continue;
							}
							if (reference.FileUri !== getCurrentUri()) {
								continue;
							}
							if (!isInBounds(reference.Start, reference.End, position)) {
								continue;
							}


							return {
								Node: field,
								NodeLocation: Range.create(field.Start!, field.End!),
								NodeNameLocation: Range.create(field.NameStart, field.NameEnd),
								RawValue: field.Value.RawValue,
								ReferenceLocation: Range.create(reference.Start, reference.End),
								References: field.References,
							};
						}
					}

					continue;
				}
			}

			continue;
		}

		if (node.Type === "Variable Declaration") {
			if (!node.NameStart || !node.NameEnd) {
				continue;
			}

			if (node.VariableValue.Value.Type === "Function") {
				return getVariableAtPosition(position, node.VariableValue.Value.Body) || {
					Node: node,
					NodeLocation: Range.create(node.Start, node.End),
					NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
					RawValue: node.RawValue,
					ReferenceLocation: Range.create(node.Start, node.End),
					References: node.References,
				};
			} else if (node.VariableType.TypeValue.Type.Type === "Table") {
				for (const field of node.VariableType.TypeValue.Type.Value) {
					if (!field.Start || !field.End) {
						continue;
					}
					if (!field.NameStart || !field.NameEnd) {
						continue;
					}

					if (isInBounds(field.Start, field.End, position)) {
						return {
							Node: field,
							NodeLocation: Range.create(node.Start, node.End),
							NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
							RawValue: tableFieldToString(field, " = ", false),
							ReferenceLocation: Range.create(field.Start, field.End),
							References: field.References,
						};
					}
				}

				return {
					Node: node,
					NodeLocation: Range.create(node.Start, node.End),
					NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
					RawValue: node.RawValue,
					ReferenceLocation: Range.create(node.Start, node.End),
					References: node.References,
				};
			} else {
				return {
					Node: node,
					NodeLocation: Range.create(node.Start, node.End),
					NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
					RawValue: node.RawValue,
					ReferenceLocation: Range.create(node.Start, node.End),
					References: node.References,
				};
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

	if (isInBounds(result.NodeLocation.start, result.NodeLocation.end, params.position)) {
		result.References.forEach((reference) => {
			const referenceLocation = Range.create(reference.Start, reference.End);

			definitions.push({
				targetRange: referenceLocation,
				targetUri: params.textDocument.uri,
				targetSelectionRange: referenceLocation,
			});

		});
	} else {
		definitions.push({
			targetRange: result.NodeLocation,
			targetUri: params.textDocument.uri,
			targetSelectionRange: result.NodeNameLocation,
		});
	}

	return definitions;
}