import actionTypes from '../actionTypes';
import axios from 'axios';
import URL from '../../commons';
import errorAction from '../generalActions';
import swal from 'sweetalert2';

export const getUserRegistrationData = payload => ({
	type: actionTypes.GET_USER_SIGNUP_DATA,
	payload
});

const userRegistrationSuccess = payload => ({
	type: actionTypes.REGISTRATION_SUCCESS,
	payload
});

const registerUserThunk = user => (dispatch) => {
	const registerUrl = `${URL}/auth/signup`;
	swal.showLoading();
	return axios.post(registerUrl, user)
		.then((response) => {
			dispatch(userRegistrationSuccess(response.data));
		})
		.catch((error) => {
			dispatch(errorAction(error.response.data.status_code));
		});
};

export default registerUserThunk;
