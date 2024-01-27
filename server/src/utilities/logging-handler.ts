/**
 * You can still use `console.log()` normally, which for some reason wasn't the case when I
 * started out, I'll leave this here though.
 */

import { Connection } from "vscode-languageserver";

type LoggingFunction = "log" | "warn" | "error" | "info";
interface QueuedItem {
	functionName: LoggingFunction,
	parameter: string,
}

const queue: QueuedItem[] = [];
let connection: Connection;

/**
 * Attempts to log a string using one of the functions, if the connection isn't yet made or has
 * failed and shutdown, it adds it to a queue till the connection is restored/made and logs
 * them after, if the connection is never restored they will never appear.
 *
 * @param name
 * @param parameter
 */
function callLoggingFunction(name: LoggingFunction, parameter: string) {
	if (connection) {
		connection.console[name](parameter);
	} else {
		queue.push({
			functionName: name,
			parameter: parameter
		});
	}
}

/**
 * Prints some values to the output, for printing tables, check {@link logTable}.
 *
 * @param parameters
 */
export function log(...parameters: (string | number | boolean)[]) {
	for (const parameter of parameters) {
		callLoggingFunction("log", String(parameter));
	}
}

/**
 * Prints an object to the output, for printing single values, check {@link log}.
 * This function handles circular references by itself.
 *
 * @param parameters
 */
export function logTable(...parameters: (any[] | object)[]) {
	for (const parameter of parameters) {
		const cache: any[] = [];

		const str = JSON.stringify(parameter, (key, value) => {
			if (key === "Parent") {
				return "*reference to parent AST*";
			}
			if (typeof value === 'object' && value !== null) {
				if (cache.includes(value) && !(key.includes("Value") || key.includes("Type"))) {
					return "*cyclic reference/reused value detected*";
				}

				cache.push(value);
			}

			return value;
		});

		callLoggingFunction("log", str);
	}
}

/**
 * Sends an error to the output without stopping the current thread.
 *
 * @param parameters
 */
export function error(...parameters: (string | number | boolean)[]) {
	for (const parameter of parameters) {
		callLoggingFunction("error", String(parameter));
	}
}

/**
 * Sends a warning to the output.
 *
 * @param parameters
 */
export function warn(...parameters: (string | number | boolean)[]) {
	for (const parameter of parameters) {
		callLoggingFunction("warn", String(parameter));
	}
}

/**
 * Prints an information message to the output.
 *
 * @param parameters
 */
export function info(...parameters: (string | number | boolean)[]) {
	for (const parameter of parameters) {
		callLoggingFunction("info", String(parameter));
	}
}

/**
 * Sets up the logging by using the connection's console. Clears any queued logs, if any.
 * Queued logs are logs that were somehow sent before the setup function was called (which
 * shouldn't happen at all) or those who are called after an error causing the connection to
 * fail and shutdown so in case of restortion of the connection, the queue will be cleared.
 *
 * @param _connection
 */
export function setup(_connection: Connection) {
	connection = _connection;

	queue.forEach(queryItem => {
		callLoggingFunction(queryItem.functionName, queryItem.parameter);
	});
}