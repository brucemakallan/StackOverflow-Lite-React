import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../commons/history';
import SignupPage from '../../containers/SignupPage';
import LoginPage from '../../containers/LoginPage';
import Home from '../Home';

const App = () => (
	<Router history={history}>
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/signup" component={SignupPage} />
				<Route exact path="/login" component={LoginPage} />
			</Switch>
		</React.Fragment>
	</Router>
);
export default (App);
