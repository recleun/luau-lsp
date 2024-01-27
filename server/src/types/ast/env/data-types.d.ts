export interface DataTypes {
	Constructors: Constructor[];
	DataTypes: DataType[];
}

export interface Constructor {
	Members: ConstructorMember[];
	Name: string;
}

export interface ConstructorMember {
	MemberType: DataTypesMemberType;
	Name: string;
	Parameters?: ConstructorParameter[];
	ReturnType?: ConstructorReturnType;
	ValueType?: ValueType;
	Deprecated?: boolean;
	TupleReturns?: ValueType[];
}

export enum DataTypesMemberType {
	Function = "Function",
	Property = "Property",
}

export interface ConstructorParameter {
	Name: string;
	Type: DataType;
	Default?: string;
}

export interface DataType {
	Name: string;
	Category?: DataTypesCategory;
	Generic?: string;
}

export enum DataTypesCategory {
	Enum = "Enum",
}

export interface ConstructorReturnType {
	Name: string;
	Category?: string;
}

export interface ValueType {
	Name: Name | string;
}

export enum Name {
	CFrame = "CFrame",
	Color3 = "Color3",
	Function = "function",
	Int = "int",
	Number = "number",
	String = "string",
	UDim2 = "UDim2",
	Vector2 = "Vector2",
	Vector3 = "Vector3",
}

export interface DataType {
	Members: DataTypeMember[];
	Name: string;
}

export interface DataTypeMember {
	MemberType: DataTypesMemberType;
	Name: string;
	Parameters?: DataTypeParameter[];
	ReturnType?: DataTypeReturnType;
	ValueType?: DataType;
	Deprecated?: boolean;
	TupleReturns?: ValueType[];
	Tags?: string[];
}

export interface DataTypeParameter {
	Name: string;
	Type: ValueType;
}

export interface DataTypeReturnType {
	Name: string;
	Generic?: string;
}
