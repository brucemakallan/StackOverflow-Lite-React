import actionTypes from '../../actions/actionTypes';
import swal from 'sweetalert2';
import { swalSuccess, swalError } from '../../commons/swal';

const initialState = {
	user: {
		email: '',
		password: ''
	}
};

const loginReducer = (state = initialState, action) => {
	const { payload } = action;
	const { user } = state;
	switch (action.type) {
	case actionTypes.GET_LOGIN_DATA:
		return {
			...state, user: { ...user, [payload.name]: payload.value }
		};
	case actionTypes.LOGIN_SUCCESS: {
		swal.hideLoading();
		const { msg, email, full_name, access_token } = payload;
		swal({ ...swalSuccess, text: msg });
		localStorage.setItem('email', email);
		localStorage.setItem('full_name', full_name);
		localStorage.setItem('access_token', access_token);
		return {
			...state, user: { ...user, fullName: full_name, email }
		};
	}
	case actionTypes.ERROR: {
		swal.hideLoading();
		swal({ ...swalError, text: payload });
		return state;
	}
	default: return state;
	}
};

export default loginReducer;
