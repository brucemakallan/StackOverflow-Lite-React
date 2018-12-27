import React, { Component } from 'react';
import { connect } from 'react-redux';
import Answer from '../../components/Answer';
import saveAllAnswersThunk from '../../actions/answerActions';
import PropTypes from 'prop-types';

export class Answers extends Component {
	componentDidMount() {
		const { getAllAnswers, questionId } = this.props;
		const token = localStorage.getItem('access_token');
		getAllAnswers({ questionId, token });
	}

	render() {
		const { answers, questionId } = this.props;
		const currentAnswers = answers.filter(answer => answer.question_id === questionId);
		return (
			currentAnswers.length > 0 ? currentAnswers.map(
				(answer, index) => <Answer answer={answer} key={index} />
			) : <small>There are no Answers yet</small>
		);
	}
}

Answers.propTypes = {
	questionId: PropTypes.number.isRequired,
	answers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	getAllAnswers: PropTypes.func.isRequired
};

const mapStateToProps = ({ answersReducer }) => ({
	answers: answersReducer.answers
});
export const mapDispatchToProps = dispatch => ({
	getAllAnswers: obj => dispatch(saveAllAnswersThunk(obj))
});
export default connect(mapStateToProps, mapDispatchToProps)(Answers);
