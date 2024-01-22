import { AST, ParsedVariableDeclaration, TableField, TableFields } from "../../types";
import { addDiagnostic } from "../../diagnostics";
import { DiagnosticSeverity, Range } from "vscode-languageserver";
import { tableKeyToString } from "../to-string";

export function findVariable(variableName: string, AST: AST, currentLocation: Range): ParsedVariableDeclaration | undefined {
	for (let i = AST.Tokens.length - 1; i >= 0; i--) {
		const element = AST.Tokens[i];
		if (element.Type !== "Variable Declaration") { continue; }
		if (element.VariableName !== variableName) { continue; }

		return element;
	}

	if (AST.Parent) {
		return findVariable(variableName, AST.Parent, currentLocation);
	} else {
		addDiagnostic({
			range: currentLocation,
			message: `Undefined global "${variableName}".`,
			code: "undefined-global",
			severity: DiagnosticSeverity.Warning,
		});

		return;
	}
}

export function tryGetFinalValue(tableChain: string, table: TableFields): TableFields {
	const fieldNames = tableChain.split(/[.:]/g);
	let fields: TableField[] = [];

	for (const field of table) {
		if (
			fieldNames[1] === tableKeyToString(field.key).substring(0, fieldNames[1].length) &&
			field.value.Type === "Value"
		) {
			if (field.value.Value.Type === "Table" && fieldNames.length > 2) {
				fields = tryGetFinalValue(tableChain.replace(/.*?[.:]/, ""), field.value.Value.Value);
				break;
			} else if (fieldNames.length <= 2) {
				fields.push(field);
			}
		}
	}

	return fields;
}