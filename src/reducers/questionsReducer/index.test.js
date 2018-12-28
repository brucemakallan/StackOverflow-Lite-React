import questionsReducer from '.';
import initialState from '../../commons/initialStates';
import actionTypes from '../../actions/actionTypes';

describe('questionsReducer', () => {

	test('save all questions to state', () => {
		const action = {
			type: actionTypes.SAVE_ALL_QUESTIONS,
			payload: []
		};
		const expectedState = {
			...initialState.questionsReducer,
			questions: []
		};
		expect(questionsReducer(initialState.questionsReducer, action)).toEqual(expectedState);
	});
});
