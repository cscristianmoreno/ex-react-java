import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";

export type FieldModelStruct = {
    title: string,
    value?: string | number,
    disabled?: boolean,
    errors?: FieldErrors<FieldValues>
} & Pick<UseFormReturn, "register"> & Pick<HTMLInputElement, NonNullable<"name"> | "type" | "placeholder">;