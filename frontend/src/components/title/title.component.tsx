import { Typography } from "@mui/joy";
import { FC, ReactElement } from "react";
import { TitleModelStruct } from "../../types/title.type";

const TitleComponent: FC<TitleModelStruct> = ({ title }: TitleModelStruct): ReactElement => {
    return (
        <Typography level="title-md" color="warning">{title}</Typography>
    );
};

export default TitleComponent;