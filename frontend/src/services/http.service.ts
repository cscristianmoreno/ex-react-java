import axios, { AxiosInstance } from "axios"

// const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL: string = "http://localhost:8080/";

export const http: AxiosInstance = axios.create({
    baseURL: BACKEND_URL
});