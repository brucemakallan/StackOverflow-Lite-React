import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

describe('<App /> component tests', () => {
	test('renders correctly', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});
});
