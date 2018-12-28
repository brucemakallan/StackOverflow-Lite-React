import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheck, faPencilAlt, faTrash, faThumbsUp, faThumbsDown
} from '@fortawesome/free-solid-svg-icons';
import '../Question/question.scss';

library.add(faCheck);
library.add(faPencilAlt);
library.add(faTrash);
library.add(faThumbsDown);
library.add(faThumbsUp);

const Answer = ({ answer }) => (
	<div className="answer-card">
		<div className="title">{answer.answer}</div>
		<div className="date small">{answer.date_posted}</div>
		<div className="answer-footer">
			<div className="votes children">
				<FontAwesomeIcon className="icon" icon="thumbs-up" title="Up-vote" />
				<FontAwesomeIcon className="icon" icon="thumbs-down" title="Down-vote" />
				<span className="accent-color">{answer.votes} Votes</span>
			</div>
			<div className="options children">
				<FontAwesomeIcon className="icon green" icon="check" title="Accept" />
				<FontAwesomeIcon className="icon green" icon="pencil-alt" title="Edit" />
				<FontAwesomeIcon className="icon red" icon="trash" title="Delete" />
			</div>
		</div>
	</div>
);

Answer.propTypes = {
	answer: PropTypes.shape({}).isRequired
};

export default Answer;
