import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import registerUserThunk from '../../actions/registrationActions';
import actionTypes from '../actionTypes';
import URL from '../../commons/index';
import registrationMockData from '../../commons/mockData';

describe('User Registration Actions', () => {
	let store;
	let mockStore;
	let registerUrl;

	beforeEach(() => {
		moxios.install();
		mockStore = configureMockStore([thunk]);
		store = mockStore({});
		registerUrl = `${URL}/auth/signup`;
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('User registration Successful', () => {
		const responseData = {
			id: 1,
			access_token: 'abcabcabcabcabcabc',
			full_name: 'James Katto',
			email: 'jameskatto@gmail.com',
			msg: 'User Registration Successful'
		};
		moxios.stubRequest(registerUrl, {
			status: 200,
			responseText: responseData
		});
		const expectedAction = {
			type: actionTypes.REGISTRATION_SUCCESS,
			payload: responseData
		};
		store.dispatch(registerUserThunk(registrationMockData))
			.then(() => {
				expect(store.getActions()).toEqual(expect.objectContaining(expectedAction));
			}).catch(() => { });
	});

	test('User registration Failed', () => {
		moxios.stubRequest(registerUrl, {
			status: 400,
			responseText: {}
		});
		const expectedAction = {
			type: actionTypes.ERROR
		};
		store.dispatch(registerUserThunk(registrationMockData))
			.then(() => {
				expect(store.getActions()).toEqual(expect.objectContaining(expectedAction));
			}).catch(() => { });
	});
});
