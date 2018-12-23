import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers/combinedReducers';

const store = createStore(
	combinedReducers,
	composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
