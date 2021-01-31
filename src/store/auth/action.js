import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import * as apiEndpoint from '../../config/apiEndPoints.json';

const axiosInstance = axios.create();

export const signinAction = (username, password, history) => {
    return async (dispatch) => {
        try {
            const data = {
                email: username,
                password: password,
            };
            const res = await axiosInstance.post(`${apiEndpoint.auth.host}${apiEndpoint.auth.endpoints.signin}`, data);
            if (res) {
                console.log(res);
                localStorage.setItem('token', res.data.data.data.signAccessToken);

                history.push({ pathname: '/app/home' });
                dispatch({ payload: res.data.data.data, type: LOGIN_SUCCESS });
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: LOGIN_FAILURE });
        }
    };
};

export const signupAction = (data, history) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.post(`${apiEndpoint.auth.host}${apiEndpoint.auth.endpoints.signup}`, data);
            if (res) {
                history.push({ pathname: '/auth/signin' });
                dispatch({ type: SIGNUP_SUCCESS });
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: SIGNUP_FAILURE });
        }
    };
};

export const logoutAction = (history) => {};
