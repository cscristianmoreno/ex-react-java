import { FC, ReactElement, useEffect } from "react";
import TableComponent from "../table/table.component";
import { usePersons } from "../../hooks/usePersons";
import ModalComponent from "../modal/modal.component";
import { useModal } from "../../hooks/useModal";
import { UseModalModelStruct } from "../../types/modal.model";
import { SubmitUserModelStruct } from "../../types/submit.model";
import { useSubmit } from "../../hooks/useSubmit";
import { FormPersonsComponent } from "../form-persons/form-persons.component";
import { FormEditPersonsComponent } from "../form-persons/form-edit.component";

const HomeComponent: FC = (): ReactElement => {

    const { initialized, allPersons, edit, setEdit, person, setPerson } = usePersons();
    const { modal, onDisplayModal }: UseModalModelStruct = useModal();

    const { setValue }: SubmitUserModelStruct = useSubmit();

    useEffect((): void => {
        if (!edit) {
            return;
        }

        if (person == null) {
            return;
        }

        setValue("id", person.id);

        if (!modal) {
            setEdit(false);
        }
    }, [edit, modal]);

    return (
        <>
            <TableComponent
                persons={allPersons}
                isInitialized={initialized}
                onDisplayModal={onDisplayModal}
                setEdit={setEdit}
                onEditSelected={setPerson}
            />
            <ModalComponent
                title="Añadir / Modificar"
                modal={modal}
                setModal={onDisplayModal}
            >
                {
                    (edit) ?
                        <FormEditPersonsComponent person={person}/>
                    :
                        <FormPersonsComponent/>
                }
            </ModalComponent> 
        </>
    );
};

export default HomeComponent;