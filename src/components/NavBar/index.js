import React from 'react';
import '../Banner/banner.scss';
import PropTypes from 'prop-types';

const NavBar = ({ history }) => {
	const fullName = localStorage.getItem('full_name');
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="/">StackOverflow-Lite</a>
			<button className="navbar-toggler"
				type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">Home</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<label className="mr-4 text-white small">
						{fullName ? fullName : history.push('/signup')}
					</label>
					<input className="form-control mr-sm-2"
						type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0"
						type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	history: PropTypes.shape({}).isRequired
};

export default NavBar;
