// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FunctionModelStruct<T = void, S = void> = (p?: any) => S extends void ? void : T;