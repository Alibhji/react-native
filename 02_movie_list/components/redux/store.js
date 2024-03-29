import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './reducer';

const rootReducer = combineReducers({movieReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
