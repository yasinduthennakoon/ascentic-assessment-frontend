import { GET_ACTIVE_TODO, CREATE_TODO, DELETE_TODO, COMPLETE_TODO, UPDATE_TODO, ACTION_FAIL } from './types';
import axiosInstance from '../../lib/axiosService';
import * as apiEndpoint from '../../config/apiEndPoints.json';

export const getActiveTodo = () => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.get(`${apiEndpoint.todo.host}${apiEndpoint.todo.endpoints.getActive}`);
            if (res) {
                dispatch({
                    payload: res.data.data.data,
                    type: GET_ACTIVE_TODO,
                });
            }
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

export const createTodo = (data) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.post(`${apiEndpoint.todo.host}${apiEndpoint.todo.endpoints.create}`, data);
            console.log(res);

            if (res) {
                dispatch({
                    payload: res.data.data.data,
                    type: CREATE_TODO,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.delete(`${apiEndpoint.todo.host}${apiEndpoint.todo.endpoints.delete}${id}`);
            console.log(res);

            if (res) {
                dispatch({
                    payload: id,
                    type: DELETE_TODO,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateTodo = (id, data) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.patch(
                `${apiEndpoint.todo.host}${apiEndpoint.todo.endpoints.update}${id}`,
                data,
            );
            console.log(res);

            if (res) {
                dispatch({
                    payload: res.data.data.data,
                    type: UPDATE_TODO,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const completeTodo = (id, data) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.patch(
                `${apiEndpoint.todo.host}${apiEndpoint.todo.endpoints.update}${id}`,
                data,
            );
            console.log(res);

            if (res) {
                dispatch({
                    payload: id,
                    type: COMPLETE_TODO,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};
