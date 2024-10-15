import { Dispatch, SetStateAction } from "react";
import { FunctionModelStruct } from "./function.type";

export type SnackbarModelStruct = {
    open: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>,
    message: string,
    setMessage: Dispatch<SetStateAction<string>>
};

export type HookSnackbarModelStruct = {
    success: FunctionModelStruct<string>;
    error: FunctionModelStruct<string>;
};