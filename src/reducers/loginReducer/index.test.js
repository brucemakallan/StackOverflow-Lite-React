import loginReducer from '.';
import initialState from '../../commons/initialStates';
import actionTypes from '../../actions/actionTypes';

describe('loginReducer', () => {

	test('gets email during Login', () => {
		const action = {
			type: actionTypes.GET_LOGIN_DATA,
			payload: { name: 'email', value: 'james@gmail.com' }
		};
		const expectedState = {
			...initialState.loginReducer,
			user: { ...initialState.loginReducer.user, email: 'james@gmail.com' }
		};
		expect(loginReducer(initialState.loginReducer, action)).toEqual(expectedState);
	});

	test('stores data after Login', () => {
		const action = {
			type: actionTypes.LOGIN_SUCCESS,
			payload: {
				msg: 'User Login Successful',
				email: 'jack.katto@gmail.com',
				full_name: 'Jack',
				access_token: 'abcabcabcabcabc'
			}
		};
		const expectedState = {
			...initialState.loginReducer,
			user: {
				...initialState.loginReducer.user,
				email: 'jack.katto@gmail.com',
				fullName: 'Jack'
			}
		};
		expect(loginReducer(initialState.loginReducer, action)).toEqual(
			expect.objectContaining(expectedState)
		);
	});

	test('error message during Login', () => {
		const action = {
			type: actionTypes.ERROR,
			payload: 'Error sample message'
		};
		const expectedState = { ...initialState.loginReducer };
		expect(loginReducer(initialState.loginReducer, action)).toEqual(expectedState);
	});
});
