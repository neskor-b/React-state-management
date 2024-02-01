import axios, { AxiosError } from "axios";
import { API_URL } from "shared/config/";


const makeApiCall = axios.create({
    baseURL: API_URL
});

export { AxiosError }

export default makeApiCall;