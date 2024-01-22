import { Diagnostic, DiagnosticRelatedInformation, URI } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

const diagnostics: { [key: URI]: Diagnostic[] } = {};
let currentUri: URI;

export function addDiagnostic(diagnostic: Diagnostic, ...extra: string[]) {
	if (!currentUri) { return; }

	const relatedInformation: DiagnosticRelatedInformation[] = [];

	extra.forEach(value => {
		relatedInformation.push({
			location: {
				uri: currentUri,
				range: diagnostic.range,
			},
			message: value
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

export function getDiagnostics(document: TextDocument): Diagnostic[] {
	return diagnostics[document.uri] || [];
}
