import { AST, NormalizedName, NormalizedNames } from "../../types";
import {
	AllNamesListContext,
	AllNamesListTypeContext,
	MixedNamesListContext,
	NameListContext,
	TypedNameListContext
} from "../LuauGrammar/LuauParser";
import { asType, asTypeList } from "./as-type";

export function normalizeNameList(namesList: NameListContext): NormalizedNames {
	const names: NormalizedNames = [];

	namesList.NAME().forEach(name => {
		names.push({
			Name: name.text,
			IsTypeOptional: name.text.endsWith("?"),
		});
	});

	return names;
}

export function normalizeTypedNameList(namesList: TypedNameListContext, ast: AST): NormalizedNames {
	const names: NormalizedNames = [];

	namesList.typedName().forEach(name => {
		const type = name.type();
		names.push({
			Name: name.NAME().text,
			Type: asType(type, ast).TypeValue.Type,
			IsTypeOptional: type.text.endsWith("?"),
		});
	});

	return names;
}

export function normalizeMixedNamesList(namesList: MixedNamesListContext, ast: AST): NormalizedNames {
	const names: NormalizedNames = [];

	namesList.optionalTypedName().forEach(name => {
		const normalizedName: NormalizedName = {
			Name: name.NAME().text,
			IsTypeOptional: name.text.endsWith("?"),
		};

		let type;
		if ((type = name.type())) {
			normalizedName.Type = asType(type, ast).TypeValue.Type;
			normalizedName.IsTypeOptional = type.text.endsWith("?");
		}

		names.push(normalizedName);
	});

	return names;
}

export function normalizeAllNamesList(allNamesList: AllNamesListContext, ast: AST): NormalizedNames {
	let names: NormalizedNames = [];
	let namesList;
	let typedNameList;
	let mixedNameList;
	if ((namesList = allNamesList.nameList())) {
		names = normalizeNameList(namesList);
	} else if ((typedNameList = allNamesList.typedNameList())) {
		names = normalizeTypedNameList(typedNameList, ast);
	} else if ((mixedNameList = allNamesList.mixedNamesList())) {
		names = normalizeMixedNamesList(mixedNameList, ast);
	}

	return names;
}

export function normalizeAllNamesListType(allNamesList: AllNamesListTypeContext, ast: AST): NormalizedNames {
	let names: NormalizedNames = [];
	let namesList;
	let typedNameList;
	if ((namesList = allNamesList.typeList())) {
		return asTypeList(namesList, ast).map(type => {
			return {
				Name: "",
				IsTypeOptional: type.RawValue.endsWith("?"),
				Type: type.TypeValue.Type,
			};
		});
	} else if ((typedNameList = allNamesList.typedNameList())) {
		names = normalizeTypedNameList(typedNameList, ast);
	}

	return names;
}