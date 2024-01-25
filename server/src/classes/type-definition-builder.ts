import { PossibleTypes, TypeDefinition } from "../types";
import { PossibleTypesBuilder } from "./possible-types-builder";

export class TypeDefinitionBuilder {
	/**
	 * Builds a {@link TypeDefinition} with type "any".
	 *
	 * @returns
	 */
	static default(): TypeDefinition {
		return TypeDefinitionBuilder.fromString("any", "any");
	}

	/**
	 * Builds a {@link TypeDefinition} from the passed string.
	 *
	 * @param type
	 * @param typeName An optional name for the type.
	 * @returns
	 */
	static fromString(type: string, typeName: string=""): TypeDefinition {
		return TypeDefinitionBuilder.fromPossibleType(PossibleTypesBuilder.asSimple(type), typeName);
	}

	/**
	 * Builds a {@link TypeDefinition} from a {@link PossibleTypes}
	 *
	 * @see {@link PossibleTypesBuilder}
	 *
	 * @param type The type this type definition uses.
	 * @param typeName An optional name for the type.
	 * @returns
	 */
	static fromPossibleType(type: PossibleTypes, typeName: string = ""): TypeDefinition {
		return {
			Type: "Type",
			TypeName: typeName,
			IsExported: false,
			Generics: [],
			RawValue: type.RawValue,
			TypeValue: {
				Type: type,
				AndTypes: [],
				OrTypes: [],
			},
			References: [],
		};
	}
}
