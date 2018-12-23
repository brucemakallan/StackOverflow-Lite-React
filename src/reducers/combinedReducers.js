import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';

const combinedReducers = combineReducers({
	questionsReducer,
});

export default combinedReducers;
