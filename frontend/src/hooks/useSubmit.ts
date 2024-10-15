import { UseFormReturn, useForm, FieldValues } from "react-hook-form";
import { FunctionModelStruct } from "../types/function.type";
import { SubmitUserModelStruct } from "../types/submit.model";
import { UseRepositoryModelStruct } from "../types/use-repository.type";
import { useRepository } from "../context/repository.context";
import { Persons } from "../entity/Persons";

export const useSubmit = (): SubmitUserModelStruct => {
    const form: UseFormReturn = useForm();

    const { save, update }: UseRepositoryModelStruct<Persons> = useRepository();

    const onSubmit: FunctionModelStruct<FieldValues, Promise<void>> = async (field: FieldValues): Promise<void> => {
        save(field as Persons);
    };

    const onEdit: FunctionModelStruct<FieldValues, Promise<void>> = async (field: FieldValues): Promise<void> => {
        // console.log(field);
        update(field as Persons);
    };

    return {
        ...form,
        onSubmit,
        onEdit
    };
};