import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../commons/history';
import SignupPage from '../../containers/SignupPage';

const App = () => (
	<Router history={history}>
		<React.Fragment>
			<Switch>
				<Route exact path="/signup" component={SignupPage} />
			</Switch>
		</React.Fragment>
	</Router>
);
export default (App);
