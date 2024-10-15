/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn, FieldValues } from "react-hook-form";
import { FunctionModelStruct } from "./function.type";

export type FormModelStruct = Pick<UseFormReturn<FieldValues>, "register" | "control" | "handleSubmit" | "formState" | "setValue">;

type F<T = FieldValues, S = void> = FunctionModelStruct<T, S>;

export type SubmitUserModelStruct = {
    onSubmit: F,
    onEdit: F
} & FormModelStruct;

export type SubmitCrudModelStruct = {
    onSave: F,
    result: any,
    data: any
} & FormModelStruct;