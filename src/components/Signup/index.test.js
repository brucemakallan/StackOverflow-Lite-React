import React from 'react';
import { mount } from 'enzyme';
import Signup from '.';

describe('<Signup /> component', () => {
	test('renders correctly', () => {
		const wrapper = mount(<Signup onChange={jest.fn()} onSubmit={jest.fn()} />);
		expect(wrapper).toMatchSnapshot();
	});
});
