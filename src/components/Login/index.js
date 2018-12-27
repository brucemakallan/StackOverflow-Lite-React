import React from 'react';
import PropTypes from 'prop-types';
import '../Signup/signup.scss';

const Login = ({ onChange, onSubmit }) => {
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
			type: 'email',
			id: 'email',
			placeholder: 'email'
		},
		{
			type: 'password',
			id: 'password',
			placeholder: 'Password'
		}
	];

	return (
		<div className="container signup-box">
			<div className="signup-image">
				<img src="https://iviidev.info/downloads/images/questions.jpg" alt="poster" />
			</div>
			<form onSubmit={onSubmit} className="signup-form mt-4">
				<h3>Login</h3>
				{formElements.map(el => createFormElement(el.type, el.id, el.placeholder))}
				<button type="submit" className="btn btn-primary">Login</button>
				<div className="mt-5 small">
					<span className="mr-2">Don't have an account?</span>
					<a href="/signup">Signup</a>
				</div>
			</form>
		</div>
	);
};

Login.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export default Login;
