import { HttpResponseModelStruct } from "../types/http.response";

export interface IRepository<T> {
    save(entity: T): Promise<HttpResponseModelStruct<T>>;
    
    update(entity: T): Promise<HttpResponseModelStruct<T>>;

    findById(id: number): Promise<HttpResponseModelStruct<T | null>>;

    findAll(): Promise<HttpResponseModelStruct<T[]>>;

    deleteById(id: number): Promise<void>;
}