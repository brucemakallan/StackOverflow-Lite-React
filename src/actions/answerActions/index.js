import actionTypes from '../actionTypes';
import axios from 'axios';
import URL from '../../commons';

const saveAllAnswers = payload => ({
	type: actionTypes.SAVE_ALL_ANSWERS,
	payload
});

const saveAllAnswersThunk = ({ questionId, token }) => (dispatch) => {
	const apiUrl = `${URL}/questions/${questionId}/answers`;
	return axios.get(apiUrl, { headers: { Authorization: `Bearer ${token}` } })
		.then((response) => {
			dispatch(saveAllAnswers(response.data));
		})
		.catch((error) => { });
};

export default saveAllAnswersThunk;
