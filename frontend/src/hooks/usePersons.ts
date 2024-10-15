import { useEffect, useState } from "react";
import { PersonsDTO } from "../dto/PersonsDTO";
import { HookModelStruct } from "../types/hook.type";
import { UseRepositoryModelStruct } from "../types/use-repository.type";
import { FunctionModelStruct } from "../types/function.type";
import { useRepository } from "../context/repository.context";
import { Persons } from "../entity/Persons";

export const usePersons = () => {
    const [allPersons, setAllPersons]: HookModelStruct<PersonsDTO[]> = useState<PersonsDTO[]>([]);
    const [person, setPerson]: HookModelStruct<Persons | null> = useState<Persons | null>(null);
    const [edit, setEdit]: HookModelStruct<boolean> = useState<boolean>(false);

    const { findAll, initialized, render }: UseRepositoryModelStruct<PersonsDTO> = useRepository();

    useEffect((): void => {
        const getAllPersons: FunctionModelStruct = async () => {
            const result: PersonsDTO[] = await findAll() as PersonsDTO[];
            setAllPersons(result);
        };

        getAllPersons();
    }, [initialized, render]);

    return {
        allPersons,
        initialized,
        person,
        setPerson,
        edit,
        setEdit
    };
};