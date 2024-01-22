export interface CustomArray<T, type extends string> extends Array<T> {
	Content?: type
}