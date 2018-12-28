import answersReducer from '.';
import initialState from '../../commons/initialStates';
import actionTypes from '../../actions/actionTypes';

describe('answersReducer', () => {

	test('save all answers, for a specific question, to state', () => {
		const action = {
			type: actionTypes.SAVE_ALL_ANSWERS,
			payload: []
		};
		const expectedState = {
			...initialState.answersReducer,
			answers: []
		};
		expect(answersReducer(initialState.answersReducer, action)).toEqual(expectedState);
	});
});
