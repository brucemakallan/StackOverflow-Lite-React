import actionTypes from '../actionTypes';
import axios from 'axios';
import URL from '../../commons';
import errorAction from '../generalActions';
import swal from 'sweetalert2';

export const getLoginData = payload => ({
	type: actionTypes.GET_LOGIN_DATA,
	payload
});

const loginSuccess = payload => ({
	type: actionTypes.LOGIN_SUCCESS,
	payload
});

const loginThunk = user => (dispatch) => {
	const apiUrl = `${URL}/auth/login`;
	swal.showLoading();
	return axios.post(apiUrl, user)
		.then((response) => {
			dispatch(loginSuccess(response.data));
			window.location.replace('/');
		})
		.catch((error) => {
			dispatch(errorAction(error.response.data.status_code));
		});
};

export default loginThunk;
