import axios from 'axios';

export const getHttpClient = () => {
    const client = axios.create();
    return client;
};
