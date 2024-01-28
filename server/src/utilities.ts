export * from "./utilities/to-string";
export * from "./utilities/type-checking";
export * from "./utilities/logging-handler";
export * from "./utilities/find-declaration";

export function wrapInCodeBlocks(code: string, language: string="lua"): string {
	return [
		"```" + language,
		code,
		"```"
	].join("\n");
}

/**
 * Takes a raw value and removes the luau string characters.
 *
 * @param rawValue
 * @returns
 */
export function getCleanRawValue(rawValue: string): string {
	return rawValue.replace(/^(?:(?:\[=*\[])|['"`])|(?:(?:\]=*\]])|['"`])$/g, "");
}