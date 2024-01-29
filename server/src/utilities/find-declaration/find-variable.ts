import { AST, VariableDeclaration, TableField, TableFields } from "../../types";
import { addDiagnostic, getCurrentUri } from "../../diagnostics";
import { DiagnosticSeverity, Position, Range } from "vscode-languageserver";
import { tableKeyToString } from "../to-string";
import { AstBuilder } from "../../classes";
import { Enums, Constructors, globals } from "../../ast/env";
import { getEnd } from "../../ast/parser/as-expression";
import { isInBounds } from "../../definition";

function _findVariable(variableName: string, AST: AST, currentLocation: Range, ignoreDiagnostics: boolean): VariableDeclaration | undefined {
	for (let i = AST.Tokens.length - 1; i >= 0; i--) {
		const element = AST.Tokens[i];
		if (element.Type !== "Variable Declaration") { continue; }
		if (element.VariableName !== variableName) { continue; }
		if (element.End!.line > currentLocation.end.line ||
			(element.End!.line === currentLocation.end.line && element.End!.character >= currentLocation.end.character)) {
			continue;
		}

		const uri = getCurrentUri();
		if (uri) {
			const actualLocation = Range.create(
				currentLocation.start,
				getEnd(variableName, currentLocation.start)
			);
			element.References.push({
				FileUri: uri,
				Start: actualLocation.start,
				End: actualLocation.end,
			});
		}

		return element;
	}

	if (AST.Parent) {
		return findVariable(variableName, AST.Parent, currentLocation);
	} else if (!ignoreDiagnostics) {
		addDiagnostic({
			range: currentLocation,
			message: `Undefined global "${variableName}".`,
			code: "undefined-global",
			severity: DiagnosticSeverity.Warning,
		});

		return;
	}
}

export function findVariable(variableName: string, AST: AST, currentLocation: Range, ignoreDiagnostics: boolean = false): VariableDeclaration | undefined {
	const completeAST: AST = {
		Tokens: [...AST.Tokens, Enums, ...Constructors, ...globals],
		Returns: [], // Returns don't matter here!
		Parent: AST.Parent,
		Uri: AST.Uri,
	};
	return _findVariable(variableName, completeAST, currentLocation, ignoreDiagnostics);
}

export function tryGetFinalValue(tableChain: string, table: TableFields): TableFields {
	const fieldNames = tableChain.split(/[.:]/g);
	let fields: TableFields = [];
	fields.Content = "TableFields";

	for (const field of table) {
		if (
			fieldNames[1] === tableKeyToString(field.Key).substring(0, fieldNames[1].length)
		) {
			if (field.Type.TypeValue.Type.Type === "Table" && fieldNames.length > 2) {
				fields = tryGetFinalValue(tableChain.replace(/.*?[.:]/, ""), field.Type.TypeValue.Type.Value);
				break;
			} else if (fieldNames.length <= 2) {
				fields.push(field);
			}
		}
	}

	return fields;
}
