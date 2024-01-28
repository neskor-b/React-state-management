import axios from "axios";
import { API_URL } from "shared/config/";


const makeApiCall = axios.create({
    baseURL: API_URL
});

export default makeApiCall