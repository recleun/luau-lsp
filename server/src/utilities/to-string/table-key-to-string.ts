import { TableKey } from "../../types";

export function tableKeyToString(key: TableKey): string {
	if (typeof key === "string") {
		return key;
	} else if (key.Type === "Value") {
		return key.Value.RawValue;
	} else if (key.Type === "Type") {
		return key.TypeName !== "" ? key.TypeName : key.RawValue;
	}

	return "";
}
