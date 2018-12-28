import React from 'react';
import { shallow } from 'enzyme';
import history from '../../commons/history';
import NavBar from '.';

describe('<NavBar /> component tests', () => {
	test('renders correctly', () => {
		localStorage.setItem('full_name', 'Jack Katto');
		const wrapper = shallow(<NavBar history={history} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('redirects if full name is not set', () => {
		localStorage.removeItem('full_name');
		const wrapper = shallow(<NavBar history={history} />);
		expect(wrapper).toMatchSnapshot();
	});
});
