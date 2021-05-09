import axios, { AxiosResponse } from 'axios';

declare module 'axios' {
    interface AxiosResponse<T> extends Promise<T> {}
}

export function getHttpClient(){
    const client = axios.create();

    const handleResponse = ({data}: AxiosResponse) => data;

    const handleError = (error: any) => Promise.reject(error);

    client.interceptors.response.use(
        handleResponse,
        handleError
    );

    return client;
};
