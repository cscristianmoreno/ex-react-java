import { IRepository } from "../models/repository.model";
import { CrudRepository } from "../repository/crud.repository";
import { HttpResponseModelStruct } from "../types/http.response";

export class CrudRepositoryService<T> implements IRepository<T> {

    private repository: CrudRepository<T>;
    
    constructor(path: string) {
        this.repository = new CrudRepository<T>(path);
    }
    
    async save(entity: T): Promise<HttpResponseModelStruct<T>> {
        return await this.repository.save(entity);
    }
    async update(entity: T): Promise<HttpResponseModelStruct<T>> {
        return await this.repository.update(entity);
    }
    async findById(id: number): Promise<HttpResponseModelStruct<T | null>> {
        return await this.repository.findById(id);
    }
    async findAll(): Promise<HttpResponseModelStruct<T[]>> {
        return await this.repository.findAll();
    }
    async deleteById(id: number): Promise<void> {
        return await this.repository.deleteById(id);
    };
}