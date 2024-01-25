import { DiagnosticRelatedInformation, URI } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { LuauDiagnostic } from "../types";

const diagnostics: { [key: URI]: LuauDiagnostic[] } = {};
let currentUri: URI;

export function addDiagnostic(diagnostic: LuauDiagnostic, ...extra: string[]) {
	if (!currentUri) { return; }

	const relatedInformation: DiagnosticRelatedInformation[] = [];

	extra.forEach(value => {
		relatedInformation.push({
			location: {
				uri: currentUri,
				range: diagnostic.range,
			},
			message: value,
		});
	});

	if (diagnostic.relatedInformation) {
		diagnostic.relatedInformation.push(...relatedInformation);
	} else {
		diagnostic.relatedInformation = relatedInformation;
	}

	diagnostics[currentUri] = diagnostics[currentUri] ?? [];
	diagnostics[currentUri].push(diagnostic);
}

export function setFile(textdocument: TextDocument) {
	currentUri = textdocument.uri;
	diagnostics[currentUri] = [];
}

export function getCurrentUri(): URI|undefined {
	return currentUri;
}

export function getDiagnostics(document: TextDocument): LuauDiagnostic[] {
	return diagnostics[document.uri] || [];
}
