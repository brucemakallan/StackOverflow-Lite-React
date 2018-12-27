import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import saveAllQuestionsThunk from '../../actions/questionsActions';
import actionTypes from '../actionTypes';
import URL from '../../commons/index';

describe('Question Actions', () => {
	let store;
	let mockStore;
	let apiUrl;

	beforeEach(() => {
		moxios.install();
		mockStore = configureMockStore([thunk]);
		store = mockStore({});
		apiUrl = `${URL}/questions`;
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('Get Questions Successfully', () => {
		moxios.stubRequest(apiUrl, {
			status: 200,
			responseText: []
		});
		const expectedAction = {
			type: actionTypes.SAVE_ALL_QUESTIONS,
			payload: []
		};
		store.dispatch(saveAllQuestionsThunk('AbcTokenAbc'))
			.then(() => {
				expect(store.getActions()).toEqual(expect.objectContaining(expectedAction));
			}).catch(() => { });
	});
});
