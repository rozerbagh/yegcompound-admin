import axios from "axios";
import { baseURL } from "../server"

export const api = axios.create({
    baseURL: baseURL,
});
api.interceptors.request.use(
    function (config) {
        let token = localStorage.getItem('admintoken');
        config.headers['Authorization'] = `Bearer ${token}`;
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (next) {
        return Promise.resolve(next)
    },
    function (error) {
        return Promise.reject(error);
    }
);
export const interceptor = (store, token) => {
    api.interceptors.request.use(
        function (config) {
            let token = localStorage.getItem('admintoken');
            config.headers['Authorization'] = `Bearer ${token}`;
            return config
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        function (next) {
            return Promise.resolve(next)
        },
        function (error) {
            return Promise.reject(error);
        }
    );
} 