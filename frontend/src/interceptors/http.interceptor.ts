import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { http } from "../services/http.service";

export class HttpInterceptor {
    constructor() {
        this.initializedInterceptor();
    }

    public initializedInterceptor(): void {
        http.interceptors.request.use((req: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> => {
            return req;
        });
        
        http.interceptors.response.use(
            (res: AxiosResponse<unknown>): AxiosResponse<unknown> => {
                return res;
            },
            (error: AxiosError): Error => {
                throw new Error(error.message);
            }
        );
    }
}