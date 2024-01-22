/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext, commands } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for lua text documents
		documentSelector: [{ scheme: 'file', language: 'lua' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'roblox-luau',
		'Roblox Luau Language Server',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start().then(() => {
		// client.onNotification('$/command', (params) => {
		// 	console.log(params);
		// 	commands.executeCommand(params.command, params.data);
		// });

		// client.onNotification('$/move cursor', (params) => {
		// 	params = JSON.parse(params);
		// 	const newPosition = new vscode.Position(params.line, params.character);
		// 	const editor = vscode.window.activeTextEditor;

		// 	if (editor) {
		// 		const selection = new vscode.Selection(newPosition, newPosition);
		// 		editor.selection = selection;
		// 		editor.revealRange(new vscode.Range(newPosition, newPosition));
		// 	}
		// });
	});
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}