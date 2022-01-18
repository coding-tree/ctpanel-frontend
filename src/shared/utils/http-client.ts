import axios, { AxiosResponse } from 'axios';

declare module 'axios' {
    interface AxiosResponse<T> extends Promise<T> {}
}

interface HttpClientSettings {
    areInterceptors?: boolean,
}

export const getHttpClient = (settings: HttpClientSettings = {}) => {
    const client = axios.create();

    const handleResponse = ({data}: AxiosResponse) => data;

    const handleError = (error: any) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
        return Promise.reject(error);
    };

    if (settings.areInterceptors) {
        client.interceptors.response.use(
            handleResponse,
            handleError
        );
    };

    return client;
};