import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../../containers/Answers';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './question.scss';

library.add(faClock);
library.add(faQuestionCircle);

const Question = ({ question }) => (
	<div className="question-card">
		<h4 className="title">
			<FontAwesomeIcon className="primary-light icon" icon="question-circle" />
			{question.question}
		</h4>
		<div className="pl-2">
			<div className="date small mb-3">
				<FontAwesomeIcon className="icon" icon={['far', 'clock']} />
				{question.date_posted}
			</div>
			<h6 className="accent-color">Answers</h6>
			<div className="answers-box mb-2">
				<Answers questionId={question.id} questionTitle={question.question} />
			</div>
			<button type="button" className="btn btn-outline-primary btn-sm">Submit Answer</button>
		</div>
	</div>
);

Question.propTypes = {
	question: PropTypes.shape({}).isRequired
};

export default Question;
