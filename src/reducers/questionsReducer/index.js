import actionTypes from '../../actions/actionTypes';

const initialState = {
	questions: []
};

const questionsReducer = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
	case actionTypes.SAVE_ALL_QUESTIONS:
		return { questions: payload };
	default:
		return state;
	}
};

export default questionsReducer;
