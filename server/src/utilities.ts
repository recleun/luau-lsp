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
