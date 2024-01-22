/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	HoverParams,
	WorkspaceEdit,
	CodeActionKind
} from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { generateAST } from './ast';
import { getDiagnostics } from './diagnostics';
import { getCompletionItems } from './completion';
import { logTable, setup } from "./utilities";

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

setup(connection);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: [".", ":"]
			},
			hoverProvider: true,
			codeActionProvider: true,
			//TODO complete the rest.
			// signatureHelpProvider: {},

		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onCodeAction(params => {
	const edit: WorkspaceEdit = {
		changes: {
			[params.textDocument.uri]: []
		},
	};
	const fixableDiagnostics: Diagnostic[] = [];
	let title = "Fix";
	let hasEdits = false;

	params.context.diagnostics.forEach(diagnostic => {
		if (!diagnostic.data) {
			return;
		}
		hasEdits = true;

		title = diagnostic.data.FixMessage;

		edit.changes![params.textDocument.uri].push({
			range: diagnostic.range,
			newText: diagnostic.data.Fix,
		});

		fixableDiagnostics.push(diagnostic);
	});

	if (!hasEdits) {
		return [];
	}

	return [{
		title: title,
		kind: CodeActionKind.QuickFix,
		diagnostics: fixableDiagnostics,
		edit,
	}];
});

connection.onCodeActionResolve(codeAction => {
	return codeAction;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
		});
	}
});

interface ExampleSettings {}

const defaultSettings: ExampleSettings = {};
let globalSettings: ExampleSettings = defaultSettings;

const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings["roblox-luau"] || defaultSettings)
		);
	}

	// documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: "roblox-luau"
		});
		documentSettings.set(resource, result);
	}
	return result;
}

documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

documents.onDidChangeContent(change => {
	generateAST(change.document);

	// validateTextDocument(change.document);
	const diagnostics = getDiagnostics(change.document);
	connection.sendDiagnostics({
		uri: change.document.uri,
		diagnostics,
	});
});

// async function validateTextDocument(textDocument: TextDocument): Promise<void> {
// 	const settings = await getDocumentSettings(textDocument.uri);

// 	const text = textDocument.getText();
// 	const pattern = /\b[A-Z]{2,}\b/g;
// 	let m: RegExpExecArray | null;

// 	let problems = 0;
// 	const diagnostics: Diagnostic[] = [];
// 	while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
// 		problems++;
// 		const diagnostic: Diagnostic = {
// 			severity: DiagnosticSeverity.Warning,
// 			range: {
// 				start: textDocument.positionAt(m.index),
// 				end: textDocument.positionAt(m.index + m[0].length)
// 			},
// 			message: `${m[0]} is all uppercase.`,
// 			source: 'ex'
// 		};
// 		if (hasDiagnosticRelatedInformationCapability) {
// 			diagnostic.relatedInformation = [
// 				{
// 					location: {
// 						uri: textDocument.uri,
// 						range: Object.assign({}, diagnostic.range)
// 					},
// 					message: 'Spelling matters'
// 				},
// 				{
// 					location: {
// 						uri: textDocument.uri,
// 						range: Object.assign({}, diagnostic.range)
// 					},
// 					message: 'Particularly for names'
// 				}
// 			];
// 		}
// 		diagnostics.push(diagnostic);
// 	}

// 	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
// }

connection.onDidChangeWatchedFiles(_change => {

});

connection.onCompletion((textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
	return getCompletionItems(documents, textDocumentPosition);
});

connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		return item;
	}
);

connection.onHover((hoverParams: HoverParams) => {
	return null;
});

documents.listen(connection);

connection.listen();
