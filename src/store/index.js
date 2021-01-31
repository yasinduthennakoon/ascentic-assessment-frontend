import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/reducers';
import todoReducer from './todo/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
});

const configureStore = () => {
    const middlewares = [thunk];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, {}, composeWithDevTools(middleWareEnhancer));
    return store;
};

export default configureStore;
