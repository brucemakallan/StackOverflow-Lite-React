import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

const combinedReducers = combineReducers({
	signupReducer,
	loginReducer
});

export default combinedReducers;
