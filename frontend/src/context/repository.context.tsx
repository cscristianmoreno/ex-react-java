/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, FC, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { HttpResponseModelStruct } from "../types/http.response";
import { CrudRepositoryService } from "../services/crud.service";
import { UseRepositoryModelStruct } from "../types/use-repository.type";
import { HookModelStruct } from "../types/hook.type";

const RepositoryCreateContext = createContext({} as UseRepositoryModelStruct<any>);

const RepositoryContext: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }): ReactElement => {

    const [initialized, setInitialized]: HookModelStruct<boolean> = useState<boolean>(false); 
    const [render, setRender]: HookModelStruct<boolean> = useState<boolean>(false);
    
    useEffect((): void => {
        if (!render) {
            return;
        }

        setRender(false);
    }, [render]);


    const crudRepositoryService: CrudRepositoryService<unknown> = new CrudRepositoryService<unknown>("persons");

    const save: (data: unknown) => Promise<unknown> = async (data: unknown): Promise<unknown> => {
        const response: HttpResponseModelStruct<unknown> = await crudRepositoryService.save(data);
        setRender(true);
        return response.data;
    };

    const update: (data: unknown) => Promise<unknown> = async (data: unknown): Promise<unknown> => {
        const response: HttpResponseModelStruct<unknown> = await crudRepositoryService.update(data);
        setRender(true);
        return response.data;
    };

    const findById: (id: number) => Promise<unknown | null> = async (id: number): Promise<unknown | null> => {
        const response: HttpResponseModelStruct<unknown | null> = await crudRepositoryService.findById(id as number);
        return response.data;
    };

    const findAll: () => Promise<unknown[]> = async (): Promise<unknown[]> => {
        const response: HttpResponseModelStruct<unknown[]> = await crudRepositoryService.findAll();
        setInitialized(true);
        return response.data;
    };
    
    const deleteById: (id: number) => Promise<void> = async (id: number): Promise<void> => {
        await crudRepositoryService.deleteById(id as number);
        setRender(true);
    };

    return (
        <RepositoryCreateContext.Provider value={{ save, update, findById, findAll, deleteById, initialized, render }}>
            {children}
        </RepositoryCreateContext.Provider>
    );
};
    
// eslint-disable-next-line react-refresh/only-export-components
export const useRepository = <T,>(): UseRepositoryModelStruct<T> => useContext(RepositoryCreateContext);
export default RepositoryContext;