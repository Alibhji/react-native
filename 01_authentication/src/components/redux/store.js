import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/countReducer";

const rootReducer = (combineReducers({ countR: countReducer }));

export default store = createStore(rootReducer);

