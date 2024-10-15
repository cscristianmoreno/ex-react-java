import { FC, ReactElement } from "react";
import TitleComponent from "../title/title.component";

const HeaderComponent: FC = (): ReactElement => {
    return <TitleComponent title="Simple CRUD + Spring Boot"/>
};

export default HeaderComponent;