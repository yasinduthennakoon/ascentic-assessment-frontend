import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_CLICK, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

const initialState = {
    isAuthenticated: false,
    error: false,
    isLoading: false,
    firstName: '',
    email: '',
    userId: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                firstName: action.payload.firstName,
                email: action.payload.email,
                userId: action.payload.userId,
                isAuthenticated: true,
                error: null,
                isLoading: false,
            };
        case LOGIN_FAILURE:
            return { ...state, isAuthenticated: false, error: true, isLoading: false };
        case SIGNUP_SUCCESS:
            return { ...state, isAuthenticated: false, error: null, isLoading: false };
        case SIGNUP_FAILURE:
            return { ...state, isAuthenticated: false, error: true, isLoading: false };
        case LOGOUT_CLICK:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};

export default reducer;
