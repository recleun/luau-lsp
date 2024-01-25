import {
	AST,
	FunctionType,
	SimpleType,
	TableType,
	Parameters,
	PossibleTypes,
	Returns,
	TableFields
} from "../types";
import { functionTypeToString, tableFieldsToString } from "../utilities";
import { AstBuilder } from "./ast-builder";

export class PossibleTypesBuilder {
	/**
	 * Builds a default {@link PossibleTypes|PossibleType} with an empty value and
	 * {@link SimpleType.Type|Type} set to "Simple".
	 *
	 * @returns
	 */
	static default(): PossibleTypes {
		return PossibleTypesBuilder.asSimple("");
	}

	/**
	 * Create a {@link TableType|PossibleType} using {@link TableFields} and an optional
	 * raw (displayed) value with {@link TableType.Type|Type} set to "Table".
	 *
	 * @param value The fields of the table.
	 * @param rawValue A custom displayed value (optional).
	 * @returns
	 */
	static asTable(value: TableFields, rawValue?: string): TableType {
		return {
			Type: "Table",
			RawValue: rawValue || tableFieldsToString(value, " = "),
			Value: value,
		};
	}

	/**
	 * Create a {@link FunctionType|PossibleType} using {@link Parameters}, {@link Returns},
	 * an optional {@link AST|body} and an optional raw (displayed) value. The
	 * {@link FunctionType.Type|Type} field is set to "Function".
	 *
	 * @param parameters The values that this function accepts.
	 * @param returns The values that this function returns.
	 * @param body A custom AST for the function (optional).
	 * @param rawValue A custom displayed value (optional).
	 * @returns
	 */
	static asFunction(parameters: Parameters, returns: Returns, body?: AST, rawValue?: string): FunctionType {
		const type: FunctionType = {
			Type: "Function",
			RawValue: "",
			Value: {
				Parameters: parameters,
				Returns: returns,
			},
			Body: body || AstBuilder.default(),
		};
		type.RawValue = rawValue || functionTypeToString(type);

		return type;
	}

	/**
	 * Builds a {@link PossibleTypes|PossibleType} with the passed value and with
	 * {@link SimpleType.Type|Type} field set to "Simple".
	 *
	 * @param type
	 * @returns
	 */
	static asSimple(type: string, rawValue?: string): SimpleType {
		return {
			Type: "Simple",
			RawValue: type,
			Value: rawValue ?? type,
		};
	}
}