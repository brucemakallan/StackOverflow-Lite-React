import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

describe('<Home /> component tests', () => {
	test('renders correctly', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper).toMatchSnapshot();
	});
});
