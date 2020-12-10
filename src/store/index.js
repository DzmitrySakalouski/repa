import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import { userReducer } from "./reducers/User";

const rootReducer = combineReducers({
    user: userReducer,
});

export const appStore = createStore(rootReducer, applyMiddleware(thunk))