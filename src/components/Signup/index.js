import React from 'react';
import PropTypes from 'prop-types';
import './signup.scss';

const Signup = ({ onChange, onSubmit }) => {
	const createFormElement = (type, id, placeholder) => (
		<div className="form-group" key={id}>
			<input
				type={type}
				id={id}
				name={id}
				className="form-control"
				placeholder={placeholder}
				required
				onChange={onChange} />
		</div>
	);

	const formElements = [
		{
			type: 'text',
			id: 'fullName',
			placeholder: 'Full name'
		},
		{
			type: 'email',
			id: 'email',
			placeholder: 'email'
		},
		{
			type: 'password',
			id: 'password',
			placeholder: 'Password'
		},
		{
			type: 'password',
			id: 'retypePassword',
			placeholder: 'Retype password'
		}
	];

	return (
		<div className="container signup-box">
			<div className="signup-image">
				<img src="https://iviidev.info/downloads/images/questions.jpg" alt="poster" />
			</div>
			<form onSubmit={onSubmit} className="signup-form mt-4">
				<h3>Create a new account</h3>
				{formElements.map(el => createFormElement(el.type, el.id, el.placeholder))}
				<button type="submit"
					className="btn btn-primary">Register</button>
			</form>
		</div>
	);
};

Signup.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export default Signup;
