/* eslint-disable no-underscore-dangle */
import remove from 'lodash/remove';
import findIndex from 'lodash/findIndex';
import {
    GET_ACTIVE_TODO,
    GET_ALL_TODO,
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    ACTION_FAIL,
} from './types';

const initialState = {
    activeTodo: [],
    allTodo: [],
    error: false,
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVE_TODO:
            return {
                ...state,
                activeTodo: action.payload,
                error: null,
                isLoading: false,
            };
        case GET_ALL_TODO:
            return { ...state, allTodo: action.payload, error: true, isLoading: false };
        case CREATE_TODO:
            return { ...state, activeTodo: [...state.activeTodo, action.payload], error: null, isLoading: false };
        case UPDATE_TODO: {
            const indexActiveTodo = findIndex(state.activeTodo, {
                _id: action.payload._id,
            });
            const listActiveTodo = [...state.activeTodo];
            listActiveTodo[indexActiveTodo] = action.payload;
            return { ...state, activeTodo: listActiveTodo, error: true, isLoading: false };
        }
        case DELETE_TODO: {
            remove(state.activeTodo, {
                _id: action.payload,
            });
            return { ...state, activeTodo: state.activeTodo };
        }
        case COMPLETE_TODO: {
            remove(state.activeTodo, {
                _id: action.payload,
            });
            return { ...state, activeTodo: state.activeTodo };
        }
        case ACTION_FAIL:
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
