import { DefinitionLink, DefinitionParams, Hover, MarkupKind, Position, Range } from "vscode-languageserver";
import { getCurrentUri } from "../diagnostics";
import { AST, VariableDeclaration, Reference, TableField, TableFieldType, TableFields } from "../types";
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

function checkReferences(references: Reference[], position: Position): [true, Reference] | [false, undefined] {
	for (const reference of references) {
		if (reference.FileUri !== getCurrentUri()) {
			continue;
		}
		if (!isInBounds(reference.Start, reference.End, position)) {
			continue;
		}

		return [true, reference];
	}

	return [false, undefined];
}

function checkTableFieldsReferences(fields: TableFields, position: Position): [true, TableField | TableFieldType, Reference] | [false, undefined, undefined] {
	for (const field of fields) {
		if (!field.NameStart || !field.NameEnd) {
			continue;
		}

		const [isReference, reference] = checkReferences(field.References, position);
		if (isReference) {
			return [true, field, reference];
		}
	}

	return [false, undefined, undefined];
}

function checkTableFields(fields: TableFields, position: Position): [true, TableField | TableFieldType] | [false, undefined] {
	for (const field of fields) {
		if (!field.Start || !field.End) {
			continue;
		}
		if (!field.NameStart || !field.NameEnd) {
			continue;
		}

		if (isInBounds(field.Start, field.End, position)) {
			return [true, field];
		}
	}

	return [false, undefined];
}

export function getNodeAtPosition(position: Position, ast: AST): VariableData | undefined {
	for (const node of ast.Tokens) {
		if (node.Type !== "Variable Declaration") {
			continue;
		}
		if (!node.Start || !node.End || !node.NameStart || !node.NameEnd) {
			continue;
		}

		const isHere = isInBounds(node.Start, node.End, position);
		if (!isHere) {
			const [isReference, reference] = checkReferences(node.References, position);
			if (isReference) {
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
				const [isReference, field, reference] = checkTableFieldsReferences(node.VariableType.TypeValue.Type.Value, position);
				if (isReference) {
					return {
						Node: field,
						NodeLocation: Range.create(field.Start!, field.End!),
						NodeNameLocation: Range.create(field.NameStart!, field.NameEnd!),
						RawValue: field.Value.RawValue,
						ReferenceLocation: Range.create(reference.Start, reference.End),
						References: field.References,
					};
				}
			}

			continue;
		}

		if (node.VariableValue.Value.Type === "Function") {
			return getNodeAtPosition(position, node.VariableValue.Value.Body) || {
				Node: node,
				NodeLocation: Range.create(node.Start, node.End),
				NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
				RawValue: node.RawValue,
				ReferenceLocation: Range.create(node.Start, node.End),
				References: node.References,
			};
		} else if (node.VariableType.TypeValue.Type.Type === "Table") {
			const [isField, field] = checkTableFields(node.VariableType.TypeValue.Type.Value, position);
			if (isField) {
				return {
					Node: field,
					NodeLocation: Range.create(node.Start, node.End),
					NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
					RawValue: tableFieldToString(field, " = ", false),
					ReferenceLocation: Range.create(field.Start!, field.End!),
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
	}

	return;
}

export function onDefinition(params: DefinitionParams): DefinitionLink[] {
	const definitions: DefinitionLink[] = [];
	const ast = getAST(params.textDocument.uri);
	if (!ast) {
		return definitions;
	}

	const result = getNodeAtPosition(params.position, ast);
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
