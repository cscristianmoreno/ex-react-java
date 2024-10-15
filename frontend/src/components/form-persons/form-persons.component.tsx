import { FC, ReactElement } from "react";
import FieldComponent from "../field/field.component";
import FormComponent from "../form/form.component";
import { useSubmit } from "../../hooks/useSubmit";
import { SubmitUserModelStruct } from "../../types/submit.model";

export const FormPersonsComponent: FC = (): ReactElement => {

    const { register, handleSubmit, onSubmit, formState: { errors } }: SubmitUserModelStruct = useSubmit();

    return (
        <FormComponent
            onSubmit={handleSubmit(onSubmit)}
            submitText="Modificar"
            submitButton={true}
        >
            <FieldComponent 
                title="Nombre" 
                register={register} 
                name="name" 
                type="text" 
                placeholder="Nombre"
                errors={errors}
            />
            <FieldComponent 
                title="Apellido" 
                register={register} 
                name="lastname" 
                type="text" 
                placeholder="Apellido"
                errors={errors}
            />
            <FieldComponent 
                title="Edad" 
                register={register} 
                name="age" type="number" 
                placeholder="Edad actual"
                errors={errors}
            />
            <FieldComponent 
                title="DNI" 
                register={register} 
                name="dni" 
                type="number" 
                placeholder="Número de documento"
                errors={errors}
            />
            <FieldComponent 
                title="País" 
                register={register} 
                name="country" 
                type="text" 
                placeholder="Lugar de residencia"
                errors={errors}
            />
        </FormComponent>
    );
}