import actionTypes from './actionTypes';

const errorAction = payload => ({
	type: actionTypes.ERROR,
	payload
});

export default errorAction;
