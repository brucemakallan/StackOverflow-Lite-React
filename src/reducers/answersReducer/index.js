import actionTypes from '../../actions/actionTypes';

const initialState = {
	answers: []
};

const answersReducer = (state = initialState, action) => {
	const { payload } = action;
	const { answers } = state;

	switch (action.type) {
	case actionTypes.SAVE_ALL_ANSWERS:
		return {
			answers: [
				...answers,
				...payload
			]
		};
	default:
		return state;
	}
};

export default answersReducer;
