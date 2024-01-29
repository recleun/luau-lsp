import { URI } from "vscode-languageserver";
import { AST, AstTokens, TypeDefinition } from "../types";

export class AstBuilder {
	/**
	 * Builds an {@link AST} from the passed parameters.
	 *
	 * @param parent The parent of the AST (only if this AST isn't for the whole file).
	 * @param uri The URI of this AST (only if ths AST is for the whole file).
	 * @param tokens The tokens of the AST
	 * @returns
	 */
	static create(parent: AST, returns: TypeDefinition[], uri: URI, tokens: AstTokens): AST {
		return {
			Tokens: tokens,
			Returns: returns,
			Parent: parent,
			Uri: uri,
		};
	}

	/**
	 * Builds a default {@link AST} with optional tokens.
	 *
	 * @param tokens Default tokens (optional).
	 * @returns
	 */
	static default(tokens: AstTokens=[]): AST {
		return {
			Tokens: tokens,
			Returns: [],
		};
	}

	/**
	 * Builds an {@link AST} that has a specific parent, meaning this AST isn't for a file but for a
	 * scope (ex. a function). Allows setting starting tokens of the AST.
	 *
	 * @param parent Parent of the AST
	 * @param tokens Default tokens (optional).
	 * @returns
	 */
	static withParent(parent: AST, tokens: AstTokens=[]): AST {
		return {
			Tokens: tokens,
			Returns: [],
			Parent: parent,
		};
	}

	/**
	 * Builds an {@link AST} that has a specific URI, meaning this AST is for a file and not for a
	 * scope (ex. a function). Allows setting starting tokens of the AST.
	 * @param uri
	 * @param tokens
	 * @returns
	 */
	static withUri(uri: URI, tokens: AstTokens=[]): AST {
		return {
			Tokens: tokens,
			Returns: [],
			Uri: uri,
		};
	}
}