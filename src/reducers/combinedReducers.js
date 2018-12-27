import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import questionsReducer from './questionsReducer';
import answersReducer from './answersReducer';

const combinedReducers = combineReducers({
	signupReducer,
	loginReducer,
	questionsReducer,
	answersReducer
});

export default combinedReducers;
