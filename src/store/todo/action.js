import { ACTION_FAIL } from './types';
import axiosInstance from '../../lib/axiosService';
import * as apiEndpoint from '../../config/apiEndPoints.json';

export const getActiveTodo = () => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.get(`${apiEndpoint.todo.host}${apiEndpoint.todo.endpoints.getActiveTodo}`);
            console.log(res);
        } catch (error) {
            console.log(error);
            dispatch({ type: ACTION_FAIL });
        }
    };
};

export const getAllTodo = () => {
    return async (dispatch) => {
        try {
            console.log('test');
        } catch (error) {
            console.log(error);
        }
    };
};
