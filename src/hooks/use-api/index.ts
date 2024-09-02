import axios from "axios";

const BASE_URL = '';

export function useApi() {

    return axios.create({
        baseURL: BASE_URL,
    });
    
}