import { Range } from "vscode-languageserver";

export type RawTokens = string[]

export type RawToken = {
	Token: string,
	Range: Range
}
export type _RawTokens = RawToken[]
