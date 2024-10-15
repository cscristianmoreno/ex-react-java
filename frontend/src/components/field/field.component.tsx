import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { FC, ReactElement } from "react";
import { FieldModelStruct } from "../../types/field.type";

const FieldComponent: FC<FieldModelStruct> = ({ ...props }: FieldModelStruct): ReactElement => {
    const { name, placeholder, register, title, type, value, disabled, errors }: FieldModelStruct = props;

    return (
        <FormControl>
            <FormLabel>{title}</FormLabel>
            
            <Input disabled={disabled} value={value} type={type} placeholder={placeholder} size="lg" {...register(name, {
                required: {
                    message: "Este campo es requerido",
                    value: true
                },
                min: {
                    message: "Este campo requiere un valor mínimo",
                    value: 1
                }
            })}/>
            <FormHelperText sx={{fontSize: 13, color: "red"}}>{errors && errors[name]?.message as string}</FormHelperText>
        </FormControl>
    );
};

export default FieldComponent;