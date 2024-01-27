import { getTypeFromValue } from "../ast/parser/as-type";
import { PossibleTypes, Reference, TypeDefinition, Value, VariableDeclaration } from "../types";
import { TypeDefinitionBuilder } from "./type-definition-builder";
import { ValueBuilder } from "./value-builder";

export class VariableDeclarationBuilder {
	/**
	 * Builds a {@link VariableDeclaration} with the passed options.
	 *
	 * @param VariableName The name of the variable.
	 * @param IsGlobal Whether or not this variable is a global.
	 * @param VariableType The type of the variable.
	 * @param VariableValue The value of the variable.
	 * @param RawValue The raw (displayed) value of the variable.
	 * @param References Array of references (if any).
	 * @returns
	 */
	static create(
		VariableName: string,
		IsGlobal: boolean,
		VariableType: TypeDefinition,
		VariableValue: Value,
		RawValue: string,
		References: Reference[] = [],
	): VariableDeclaration {
		return {
			Type: "Variable Declaration",
			VariableName: VariableName,
			IsGlobal: IsGlobal,
			VariableType: VariableType,
			VariableValue: VariableValue,
			RawValue: RawValue,
			References: References,
		};
	}

	/**
	 * Builds a {@link VariableDeclaration} using only it's value, type and an optional name.
	 * Also sets `RawValue` if `variableName` isn't an empty string.
	 *
	 * @see {@link VariableDeclarationBuilder.create|create} for all options.
	 *
	 * @param value The value of the variable.
	 * @param type The type of the variable.
	 * @param variableName An optional name for the variable.
	 * @returns
	 */
	static abstractCreate(value: Value, type: TypeDefinition, variableName: string = ""): VariableDeclaration {
		let rawValue = "";
		if (variableName !== "") {
			rawValue = value.Value.RawValue !== ""
				? `local ${variableName} = ${value.Value.RawValue}`
				: `local ${variableName}: ${type.TypeName}`;
		}

		return {
			Type: "Variable Declaration",
			VariableName: variableName,
			IsGlobal: false,
			VariableType: type,
			VariableValue: value,
			RawValue: rawValue,
			References: [],
		};
	}

	/**
	 * Builds a default {@link VariableDeclaration} with default type and value as well as
	 * no name.
	 *
	 * @returns
	 */
	static default(): VariableDeclaration {
		return {
			Type: "Variable Declaration",
			VariableName: "",
			IsGlobal: false,
			VariableType: TypeDefinitionBuilder.default(),
			VariableValue: ValueBuilder.default(),
			RawValue: "",
			References: [],
		};
	}

	/**
	 * Builds a {@link VariableDeclaration} using a specific value and tries getting the type
	 * if `useDefaultType` is true.
	 *
	 * @param value The value of the variable.
	 * @param useDefaultType Whether or not to get the type based on the value, when false uses the return of {@link TypeDefinitionBuilder.default}.
	 * @returns
	 */
	static fromValue(value: Value, useDefaultType: boolean = false, variableName: string = ""): VariableDeclaration {
		let rawValue = "";
		if (variableName !== "") {
			rawValue = `local ${variableName} = ${value.Value.RawValue}`;
		}

		return {
			Type: "Variable Declaration",
			VariableName: "",
			IsGlobal: false,
			VariableType: useDefaultType
				? TypeDefinitionBuilder.default()
				: getTypeFromValue(value.Value)[0],
			VariableValue: value,
			RawValue: rawValue,
			References: [],
		};
	}

	/**
	 * Builds a {@link VariableDeclaration} using a specific value and tries getting the type
	 * if `useDefaultType` is true.
	 *
	 * @param type The type of the variable.
	 * @param variableName An optional name for the variable.
	 * @returns
	 */
	static fromType(type: TypeDefinition, variableName: string = ""): VariableDeclaration {
		let rawValue = "";
		if (variableName !== "") {
			rawValue = `local ${variableName}: ${type.TypeName}`;
		}

		return {
			Type: "Variable Declaration",
			VariableName: variableName,
			IsGlobal: false,
			VariableType: type,
			VariableValue: ValueBuilder.default(),
			RawValue: rawValue,
			References: [],
		};
	}
}

