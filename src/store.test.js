import store from './store';
import initialState from './commons/initialStates';

describe('store tests', () => {
	test('return initial state', () => {
		expect(store.getState()).toEqual(expect.objectContaining(initialState));
	});
});
