/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
            return Promise.resolve(config);
        }
    } catch (error) {
        return Promise.reject(error);
    }
});

export default axiosInstance;
