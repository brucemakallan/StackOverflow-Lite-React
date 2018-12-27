import actionTypes from '../actionTypes';
import axios from 'axios';
import URL from '../../commons';

const saveAllQuestions = payload => ({
	type: actionTypes.SAVE_ALL_QUESTIONS,
	payload
});

const saveAllQuestionsThunk = token => (dispatch) => {
	const apiUrl = `${URL}/questions`;
	return axios.get(apiUrl, { headers: { Authorization: `Bearer ${token}` } })
		.then((response) => {
			dispatch(saveAllQuestions(response.data));
		})
		.catch(() => { });
};

export default saveAllQuestionsThunk;
