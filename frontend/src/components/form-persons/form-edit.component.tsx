import { FC, ReactElement, useEffect } from "react";
import FieldComponent from "../field/field.component";
import FormComponent from "../form/form.component";
import { useSubmit } from "../../hooks/useSubmit";
import { SubmitUserModelStruct } from "../../types/submit.model";
import { Persons } from "../../entity/Persons";

export const FormEditPersonsComponent: FC<{ person: Persons | null }> = ({ person }: { person: Persons | null }): ReactElement => {

    const { register, onEdit, handleSubmit, setValue, formState: { errors } }: SubmitUserModelStruct = useSubmit();

    useEffect((): void => {
        if (person == null) {
            return;
        }

        setValue("name", person.name);
        setValue("lastname", person.lastname);
        setValue("age", person.age);
        setValue("dni", person.dni);
        setValue("country", person.country);
    }, [person]);

    return (
        <FormComponent
            onSubmit={handleSubmit(onEdit)}
            submitText="Modificar"
            submitButton={true}
        >
            <FieldComponent 
                title="ID" 
                register={register} 
                name="id" 
                type="number" 
                placeholder="Nombre"
                value={person?.id}
                errors={errors}
            />
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