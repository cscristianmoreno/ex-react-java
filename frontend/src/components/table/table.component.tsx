import { Button, ButtonGroup, Table } from "@mui/joy";
import { FC, ReactElement } from "react";
import { PersonsDTO } from "../../dto/PersonsDTO";
import { TableModelStruct } from "../../types/table.type";
import { UseRepositoryModelStruct } from "../../types/use-repository.type";
import { useRepository } from "../../context/repository.context";
import { HookSnackbarModelStruct } from "../../types/snackbar.type";
import { useSnackbar } from "../../hooks/useSnackbar";
import { FunctionModelStruct } from "../../types/function.type";
import { Persons } from "../../entity/Persons";

const TableComponent: FC<TableModelStruct> = ({ persons, isInitialized, onDisplayModal, setEdit, onEditSelected }: TableModelStruct): ReactElement => {

    const { deleteById }: UseRepositoryModelStruct<PersonsDTO> = useRepository();
    const { success }: HookSnackbarModelStruct = useSnackbar();

    const onDeleteById = async (id: number): Promise<void> => {
        await deleteById(id);
        success("Acción realizada correctamente");
    };

    const onEdit: FunctionModelStruct<Persons, void> = (persons: Persons): void => {
        onEditSelected(persons);
        onDisplayModal(true);
        setEdit(true);
    }

    if (!isInitialized) {
        return <h3>Cargando...</h3>;
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>DNI</th>
                    <th>País</th>
                    <th>Fecha registro</th>
                    <th>Hora registro</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
            {
                 persons && persons.map((person: PersonsDTO, index: number): ReactElement => {
                    return (
                        <tr key={index}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.lastname}</td>
                            <td>{person.age}</td>
                            <td>{person.dni}</td>
                            <td>{person.country}</td>
                            <td>{new Date(person.register).toLocaleDateString()}</td>
                            <td>{new Date(person.register).toLocaleTimeString()}</td>
                            <td>
                                <ButtonGroup>
                                    <Button color="danger" variant="outlined" onClick={(): void => onEdit(person)}>!</Button>
                                    <Button color="danger" variant="outlined" onClick={(): Promise<void> => onDeleteById(person.id)}>-</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Button onClick={() => onDisplayModal(true)}>+</Button></td>
                </tr>
            </tfoot>
        </Table>
    );
};

export default TableComponent;