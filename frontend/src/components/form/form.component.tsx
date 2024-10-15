import { FC, ReactElement } from "react";

import "./form.component.css";
import { Button, Typography } from "@mui/joy";
import { FormModelStruct } from "../../types/form.model";

const FormComponent: FC<FormModelStruct> = ({ children, title, style, submitText, onSubmit, submitButton }: FormModelStruct): ReactElement => {
    return (
        <form onSubmit={onSubmit} style={{...style}} className="class_form_container">
            <Typography level="h3">{title}</Typography>
            {children}
            {submitButton && <Button size="lg" type="submit">{submitText}</Button>}
        </form>
    );
};

export default FormComponent;