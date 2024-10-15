import { Dispatch, SetStateAction } from "react";
import { PersonsDTO } from "../dto/PersonsDTO";
import { Persons } from "../entity/Persons";
import { FunctionModelStruct } from "./function.type";

export type TableModelStruct = {
    persons: PersonsDTO[],
    isInitialized: boolean,
    onDisplayModal: FunctionModelStruct,
    setEdit: Dispatch<SetStateAction<boolean>>,
    onEditSelected: Dispatch<SetStateAction<Persons | null>>
};