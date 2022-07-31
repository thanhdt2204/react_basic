import axios from 'axios';
import { getEnv } from "../config/env";

const instance = axios.create({
    baseURL: `${getEnv("HOST_API")}`,
})

instance.interceptors.response.use(
    response => {
        return {
            status: 200,
            data: response.data,
            message: ''
        }
    },
    error => {
        return {
            status: error.response.status,
            data: '',
            message: error.response.status === 400 ? error.response.data : error.response.data.message
        }
    }
);

export default instance;