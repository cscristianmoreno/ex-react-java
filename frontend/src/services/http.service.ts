import axios, { AxiosInstance } from "axios"

const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

export const http: AxiosInstance = axios.create({
    baseURL: BACKEND_URL
});