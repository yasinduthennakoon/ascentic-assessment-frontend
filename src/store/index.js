import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
});

const configureStore = () => {
    const middlewares = [thunk];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, {}, composeWithDevTools(middleWareEnhancer));
    return store;
};

export default configureStore;
