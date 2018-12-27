import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signup from '../../components/Signup';
import { getUserRegistrationData } from '../../actions/registrationActions';
import PropTypes from 'prop-types';
import registerUserThunk from '../../actions/registrationActions';

export class SignupPage extends Component {
	handleChange = (event) => {
		const { name, value } = event.target;
		const { storeUserData } = this.props;
		storeUserData({ name, value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { registerUser, user } = this.props;
		const data = {
			...user,
			full_name: user.fullName,
			retype_password: user.retypePassword
		};
		registerUser(data);
	}

	render() {
		return (
			<Signup onChange={this.handleChange} onSubmit={this.handleSubmit} />
		);
	}
}

SignupPage.propTypes = {
	storeUserData: PropTypes.func.isRequired,
	registerUser: PropTypes.func.isRequired,
	user: PropTypes.shape({}).isRequired
};

const mapStateToProps = ({ signupReducer }) => ({
	user: signupReducer.user
});
export const mapDispatchToProps = dispatch => ({
	storeUserData: data => dispatch(getUserRegistrationData(data)),
	registerUser: data => dispatch(registerUserThunk(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
