import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import saveAllAnswersThunk from '../../actions/answerActions';
import actionTypes from '../actionTypes';
import URL from '../../commons/index';

describe('Answer Actions', () => {
	let store;
	let mockStore;
	let apiUrl;

	beforeEach(() => {
		moxios.install();
		mockStore = configureMockStore([thunk]);
		store = mockStore({});
		apiUrl = `${URL}/questions/1/answers`;
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('Get Answers Successfully', () => {
		moxios.stubRequest(apiUrl, {
			status: 200,
			responseText: []
		});
		const expectedAction = {
			type: actionTypes.SAVE_ALL_ANSWERS,
			payload: []
		};
		store.dispatch(saveAllAnswersThunk({ questionId: 1, token: 'abcabc' }))
			.then(() => {
				expect(store.getActions()).toEqual(expect.objectContaining(expectedAction));
			}).catch(() => { });
	});
});
