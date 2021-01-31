import { GET_ACTIVE_TODO, GET_ALL_TODO, CREATE_TODO, UPDATE_TODO, DELETE_TODO, ACTION_FAIL } from './types';

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
            return { ...state, error: true, isLoading: false };
        case CREATE_TODO:
            return { ...state, error: null, isLoading: false };
        case UPDATE_TODO:
            return { ...state, error: true, isLoading: false };
        case DELETE_TODO:
            return { ...state };
        case ACTION_FAIL:
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
