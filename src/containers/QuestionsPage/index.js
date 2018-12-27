import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../../components/Question';
import saveAllQuestionsThunk from '../../actions/questionsActions';
import PropTypes from 'prop-types';

export class QuestionsPage extends Component {
	componentDidMount() {
		const { getAllQuestions } = this.props;
		getAllQuestions(localStorage.getItem('access_token'));
	}

	render() {
		const { questions } = this.props;
		return (
			<div className="container questions-box mt-3">
				{questions.length > 0 ? questions.map(
					(question, index) => <Question question={question} key={index} />
				) : 'Loading Questions ... '}
			</div>
		);
	}
}

QuestionsPage.propTypes = {
	questions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	getAllQuestions: PropTypes.func.isRequired
};

const mapStateToProps = ({ questionsReducer }) => ({
	questions: questionsReducer.questions
});
export const mapDispatchToProps = dispatch => ({
	getAllQuestions: token => dispatch(saveAllQuestionsThunk(token))
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
