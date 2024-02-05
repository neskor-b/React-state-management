import axios, { AxiosError, AxiosResponse } from "axios";
import { API_URL } from "shared/config/";

const makeApiCall = axios.create({
    baseURL: API_URL
});

makeApiCall.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        if (error?.config?.method === 'get' && error.response?.status === 404) {
            console.log(error);
            return Promise.resolve('Not found');
        }        
        return Promise.reject(error);
    }
);


export { AxiosError };

export default makeApiCall;
