import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import loginThunk from '../../actions/loginActions';
import actionTypes from '../actionTypes';
import URL from '../../commons/index';
import { loginMockData } from '../../commons/mockData';

describe('User Login Actions', () => {
	let store;
	let mockStore;
	let apiUrl;

	beforeEach(() => {
		moxios.install();
		mockStore = configureMockStore([thunk]);
		store = mockStore({});
		apiUrl = `${URL}/auth/login`;
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('User Login Successful', () => {
		const responseData = {
			id: 1,
			access_token: 'abcabcabcabcabcabc',
			full_name: 'James Katto',
			email: 'jameskatto@gmail.com',
			msg: 'User Login Successful'
		};
		moxios.stubRequest(apiUrl, {
			status: 200,
			responseText: responseData
		});
		const expectedAction = {
			type: actionTypes.LOGIN_SUCCESS,
			payload: responseData
		};
		store.dispatch(loginThunk(loginMockData))
			.then(() => {
				expect(store.getActions()).toEqual(expect.objectContaining(expectedAction));
			}).catch(() => { });
	});

	test('User Login Failed', () => {
		moxios.stubRequest(apiUrl, {
			status: 400,
			responseText: {}
		});
		const expectedAction = {
			type: actionTypes.ERROR
		};
		store.dispatch(loginThunk(loginMockData))
			.then(() => {
				expect(store.getActions()).toEqual(expect.objectContaining(expectedAction));
			}).catch(() => { });
	});
});
