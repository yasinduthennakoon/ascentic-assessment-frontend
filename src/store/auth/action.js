import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import axiosInstance from '../../lib/axiosService';
import * as apiEndpoint from '../../config/apiEndPoints.json';

export const signinAction = (username, password, history) => {
    return async (dispatch) => {
        try {
            const data = {
                email: username,
                password: password,
            };
            const res = await axiosInstance.post(`${apiEndpoint.auth.host}${apiEndpoint.auth.endpoints.signin}`, data);
            if (res) {
                history.push({ pathname: '/app/home' });
                dispatch({ type: LOGIN_SUCCESS });
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
