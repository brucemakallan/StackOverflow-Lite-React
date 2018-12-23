import signupReducer from '.';
import initialState from '../../commons/initialStates';
import actionTypes from '../../actions/actionTypes';

describe('signupReducer', () => {

	test('gets email during registration', () => {
		const action = {
			type: actionTypes.GET_USER_SIGNUP_DATA,
			payload: { name: 'email', value: 'james@gmail.com' }
		};
		const expectedState = {
			...initialState.signupReducer,
			user: { ...initialState.signupReducer.user, email: 'james@gmail.com' }
		};
		expect(signupReducer(initialState.signupReducer, action)).toEqual(expectedState);
	});

	test('stores data after registration', () => {
		const action = {
			type: actionTypes.REGISTRATION_SUCCESS,
			payload: {
				msg: 'User Registration Successful',
				email: 'jack.katto@gmail.com',
				full_name: 'Jack',
				access_token: 'abcabcabcabcabc'
			}
		};
		const expectedState = {
			...initialState.signupReducer,
			user: {
				...initialState.signupReducer.user,
				email: 'jack.katto@gmail.com',
				fullName: 'Jack'
			}
		};
		expect(signupReducer(initialState.signupReducer, action)).toEqual(
			expect.objectContaining(expectedState)
		);
	});

	test('error message during registration', () => {
		const action = {
			type: actionTypes.ERROR,
			payload: 'Error sample message'
		};
		const expectedState = { ...initialState.signupReducer };
		expect(signupReducer(initialState.signupReducer, action)).toEqual(expectedState);
	});
});
