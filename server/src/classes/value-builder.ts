import { PossibleTypes, TypeDefinition, Value } from "../types";
import { PossibleTypesBuilder } from "./possible-types-builder";

export class ValueBuilder {
	/**
	 * Builds a {@link Value} using a {@link PossibleTypes|PossibleType}.
	 *
	 * @see {@link PossibleTypesBuilder}.
	 *
	 * @param type The type of the value.
	 * @returns
	 */
	static fromPossibleType(type: PossibleTypes): Value {
		return {
			Type: "Value",
			Value: type,
		};
	}

	/**
	 * Builds a {@link Value} using a string.
	 *
	 * @see {@link PossibleTypesBuilder}.
	 *
	 * @param type String representation of the type, normally a "Simple" type.
	 * @returns
	 */
	static fromString(type: string, rawValue: string = ""): Value {
		return ValueBuilder.fromPossibleType(PossibleTypesBuilder.asSimple(type, rawValue));
	}

	/**
	 * Builds a {@link Value} using a {@link TypeDefinition}.
	 *
	 * @see {@link TypeDefinitionBuilder}.
	 *
	 * @param type The type definition of tha parent variable.
	 * @returns
	 */
	static fromTypeDefinition(type: TypeDefinition): Value {
		return {
			Type: "Value",
			Value: type.TypeValue.Type,
		};
	}

	/**
	 * Builds a default {@link Value} using the {@link PossibleTypesBuilder.default}.
	 *
	 * @returns
	 */
	static default(): Value {
		return ValueBuilder.fromPossibleType(PossibleTypesBuilder.default());
	}
}