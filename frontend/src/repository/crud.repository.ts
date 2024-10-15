import { AxiosResponse } from "axios";
import { IRepository } from "../models/repository.model";
import { http } from "../services/http.service";
import { HttpResponseModelStruct } from "../types/http.response";

export class CrudRepository<T> implements IRepository<T> {
    private path: string = "";
    
    constructor(path: string) {
        this.path = path;
    }

    async save(entity: T): Promise<HttpResponseModelStruct<T>> {
        const response: AxiosResponse<HttpResponseModelStruct<T>> = await http.post(this.path + "/save", entity);
        return response.data;
    }
    async update(entity: T): Promise<HttpResponseModelStruct<T>> {
        const response: AxiosResponse<HttpResponseModelStruct<T>> = await http.put(this.path + "/update", entity);
        return response.data;
    }
    async findById(id: number): Promise<HttpResponseModelStruct<T | null>> {
        const response: AxiosResponse<HttpResponseModelStruct<T>> = await http.get(this.path + "/" + id);
        return response.data;
    }

    async findAll(): Promise<HttpResponseModelStruct<T[]>> {
        const response: AxiosResponse<HttpResponseModelStruct<T[]>> = await http.get(this.path + "/all");
        return response.data;
    }
    
    async deleteById(id: number): Promise<void> {
        const response: AxiosResponse<void> = await http.delete(this.path + "/" + id);
        return response.data;
    }
}