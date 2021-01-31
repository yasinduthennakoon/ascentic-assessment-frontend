// import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_CLICK, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

export const signinAction = (username, password, history) => {
    return async (dispatch) => {
        console.log(username);
        console.log(password);
        console.log(history);
    };
};

export const signupAction = (username, password, history) => {
    return async (dispatch) => {};
};

export const logoutAction = (history) => {};
