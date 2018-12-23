import { combineReducers } from 'redux';
import signupReducer from './signupReducer';

const combinedReducers = combineReducers({
	signupReducer,
});

export default combinedReducers;
