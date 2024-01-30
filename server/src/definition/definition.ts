import { DefinitionLink, DefinitionParams, Hover, MarkupKind, Position, Range } from "vscode-languageserver";
import { getCurrentUri } from "../diagnostics";
import { AST, VariableDeclaration, Reference, TableField, TableFieldType, TableFields, ASTNode, TypeDefinition, AstToken } from "../types";
import { log, logTable, tableFieldToString, tableKeyToString } from "../utilities";
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
	Node: VariableDeclaration | TypeDefinition | TableField | TableFieldType,
	NodeLocation: Range,
	NodeNameLocation: Range,
	RawValue: string,
	ReferenceLocation: Range,
	References: Reference[],
}
type ReferenceableNode = AstToken & (VariableDeclaration | TypeDefinition);

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
		if (field.Type.TypeValue.Type.Type === "Table") {
			const [isReference, innerField, reference] = checkTableFieldsReferences(field.Type.TypeValue.Type.Value, position);

			if (isReference) {
				return [true, innerField, reference];
			}
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
		} else {
			if (field.Type.TypeValue.Type.Type === "Table") {
				const [isField, innerField] = checkTableFields(field.Type.TypeValue.Type.Value, position);
				if (isField) {
					return [true, innerField];
				}
			}
		}
	}

	return [false, undefined];
}

function checkNode(
	position: Position,
	node: ReferenceableNode,
	getType: (node: ReferenceableNode) => TypeDefinition,
): VariableData | undefined {
	if (!node.Start || !node.End || !node.NameStart || !node.NameEnd) {
		return;
	}
	const type = getType(node);

	const isHere = isInBounds(node.NameStart, node.NameEnd, position);
	if (!isHere) {
		// Check for references.
		const [isVariableReference, variableReference] = checkReferences(node.References, position);
		if (isVariableReference) {
			if (variableReference.End!.line < node.End.line ||
				(variableReference.End!.line === node.End.line && variableReference.End!.character <= node.End.character)) {
				return;
			}
			return {
				Node: node,
				NodeLocation: Range.create(node.Start, node.End),
				NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
				RawValue: node.RawValue,
				ReferenceLocation: Range.create(variableReference.Start, variableReference.End),
				References: node.References,
			};
		}

		if (type.TypeValue.Type.Type === "Table") {
			const [isReference, field, reference] = checkTableFieldsReferences(type.TypeValue.Type.Value, position);
			if (isReference) {
				return {
					Node: field,
					NodeLocation: Range.create(field.Start!, field.End!),
					NodeNameLocation: Range.create(field.NameStart!, field.NameEnd!),
					RawValue: field.Type.RawValue,
					ReferenceLocation: Range.create(reference.Start, reference.End),
					References: field.References,
				};
			}
		}
	}

	if (node.Type === "Variable Declaration" && node.VariableValue.Value.Type === "Function") {
		const result = getNodeAtPosition(position, node.VariableValue.Value.Body);
		if (isHere && !result) {
			return {
				Node: node,
				NodeLocation: Range.create(node.Start, node.End),
				NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
				RawValue: node.RawValue,
				ReferenceLocation: Range.create(node.Start, node.End),
				References: node.References,
			};
		}

		return result;
	} else if (isHere && type.TypeValue.Type.Type === "Function") {
		return {
			Node: type,
			NodeLocation: Range.create(node.Start, node.End),
			NodeNameLocation: Range.create(node.NameStart, node.NameEnd),
			RawValue: type.RawValue,
			ReferenceLocation: Range.create(node.Start, node.End),
			References: type.References,
		};
	} else if (isHere && type.TypeValue.Type.Type === "Table") {
		const [isField, field] = checkTableFields(type.TypeValue.Type.Value, position);
		if (isField) {
			return {
				Node: field,
				NodeLocation: Range.create(field.Start!, field.End!),
				NodeNameLocation: Range.create(field.NameStart!, field.NameEnd!),
				RawValue: tableFieldToString(field, false),
				ReferenceLocation: Range.create(field.Start!, field.End!),
				References: field.References,
			};
		}
	}

	if (!isHere) {
		// Didn't find any references
		return;
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

export function getNodeAtPosition(position: Position, ast: AST): VariableData | undefined {
	for (let index = ast.Tokens.length - 1; index >= 0; index--) {
		const node = ast.Tokens[index];
		if (node.Type !== "Variable Declaration" && node.Type !== "Type") {
			if (!isInBounds(node.Start!, node.End!, position)) {
				continue;
			}
			if (
				node.Type === "ForIn"
				|| node.Type === "ForNumeric"
				|| node.Type === "Repeat Block"
				|| node.Type === "While Loop"
			) {
				return getNodeAtPosition(position, node.Body);
			}
			if (node.Type === "If Statement") {
				const result = getNodeAtPosition(position, node.Body);
				if (result) {
					return result;
				}
				for (const statement of node.ElseIfStatements) {
					const result = getNodeAtPosition(position, statement.Body);
					if (result) {
						return result;
					}
				}
				if (node.Else) {
					return getNodeAtPosition(position, node.Else.Body);
				}
			}

			continue;
		}

		const variableData = checkNode(position, node, (node) => {
			return node.Type === "Variable Declaration" ? node.VariableType : node;
		});
		if (variableData) {
			return variableData;
		}
	}

	return;
}

export function onDefinition(params: DefinitionParams): DefinitionLink[] {
	const definitions: DefinitionLink[] = [];
	const ast = getAST(params.textDocument.uri, false);
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
