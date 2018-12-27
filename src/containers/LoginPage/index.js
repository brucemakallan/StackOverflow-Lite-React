import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login';
import loginThunk, { getLoginData } from '../../actions/loginActions';
import PropTypes from 'prop-types';

export class LoginPage extends Component {
	handleChange = (event) => {
		const { name, value } = event.target;
		const { saveLoginData } = this.props;
		saveLoginData({ name, value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { loginUser, user } = this.props;
		loginUser(user);
	}

	render() {
		return (
			<Login onChange={this.handleChange} onSubmit={this.handleSubmit} />
		);
	}
}

LoginPage.propTypes = {
	saveLoginData: PropTypes.func.isRequired,
	loginUser: PropTypes.func.isRequired,
	user: PropTypes.shape({}).isRequired
};

const mapStateToProps = ({ loginReducer }) => ({
	user: loginReducer.user
});
export const mapDispatchToProps = dispatch => ({
	saveLoginData: data => dispatch(getLoginData(data)),
	loginUser: data => dispatch(loginThunk(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
