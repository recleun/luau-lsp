import { AST, TypeDefinition } from "../../types";
import { addDiagnostic, getCurrentUri } from "../../diagnostics";
import { DiagnosticSeverity, Range } from "vscode-languageserver";
import { TypeDefinitionBuilder } from "../../classes";

const BUILT_IN_TYPES = [
	"unknown",
	"never",
	"any",
	"nil",

	"string",
	"number",
	"boolean",
	"thread",
	"userdata",
	"buffer",
];

//TODO: Add support for cross-file types when modules are implemented
export function findType(typeName: string, AST: AST, currentLocation: Range): TypeDefinition | undefined {
	for (let i = 0; i < AST.Tokens.length; i++) {
		const element = AST.Tokens[i];
		if (element.Type !== "Type") { continue; }
		if (element.TypeName !== typeName) { continue; }

		const uri = getCurrentUri();
		if (uri) {
			element.References.push({
				FileUri: uri,
				Start: currentLocation.start,
				End: currentLocation.end,
			});
		}

		return element;
	}

	if (AST.Parent) {
		return findType(typeName, AST.Parent, currentLocation);
	} else {
		if (BUILT_IN_TYPES.includes(typeName)) {
			// If the type is a built-in type and no type declaration was found for it, aka it
			// wasn't overriden, we don't send diagnostics. This check is done at the end only
			// in case the user overrides one of the built-in types.
			return TypeDefinitionBuilder.fromString(typeName, typeName);
		}

		addDiagnostic({
			range: currentLocation,
			message: `Undefined type "${typeName}".`,
			code: "undefined-type",
			severity: DiagnosticSeverity.Warning,
		});

		return;
	}
}