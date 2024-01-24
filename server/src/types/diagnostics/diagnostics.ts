import { Diagnostic } from "vscode-languageserver";

export interface Fix {
	Fix: string,
	FixMessage: string,
}

export interface DiagnosticData {
	Fixes: Fix[],
}

export interface LuauDiagnostic extends Diagnostic {
	data?: DiagnosticData
}
