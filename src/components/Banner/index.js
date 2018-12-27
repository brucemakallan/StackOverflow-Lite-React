import React from 'react';
import history from '../../commons/history';
import NavBar from '../NavBar';
import './banner.scss';

const Banner = () => (
	<div className="banner">
		<NavBar history={history} />
		<div className="poster">
			<div className="intro">
				<h1 className="main-heading">StackOverflow-Lite</h1>
				<div className="tagline">Your one-stop shop for Answers to all your questions</div>
			</div>
			<div className="signup-msg text-center">
				<span className="mr-3">Don't have an account with us?</span>
				<a href="/signup" className="btn btn-primary btn-sm">Signup</a>
			</div>
		</div>
	</div>
);

export default Banner;
