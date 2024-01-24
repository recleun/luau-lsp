import { AST, TypeDefinition } from "../../types";
import { addDiagnostic, getCurrentUri } from "../../diagnostics";
import { DiagnosticSeverity, Range } from "vscode-languageserver";

export function findType(typeName: string, AST: AST, exported: boolean, currentLocation: Range): TypeDefinition | undefined {
	for (let i = 0; i < AST.Tokens.length; i++) {
		const element = AST.Tokens[i];
		if (element.Type !== "Type") { continue; }
		if (element.TypeName !== typeName) { continue; }
		if (element.IsExported !== exported) { break; }

		const uri = getCurrentUri();
		if (uri) {
			element.References?.push({
				FileUri: uri,
				Start: currentLocation.start,
				End: currentLocation.end,
			});
		}

		return element;
	}

	if (AST.Parent) {
		return findType(typeName, AST.Parent, exported, currentLocation);
	} else {
		addDiagnostic({
			range: currentLocation,
			message: `Use of undefined/unexported type "${typeName}".`,
			code: "undefined-type",
			severity: DiagnosticSeverity.Warning,
		});

		return;
	}
}