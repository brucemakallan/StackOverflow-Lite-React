import React from 'react';
import { mount } from 'enzyme';
import Login from '.';

describe('<Login /> component', () => {
	test('renders correctly', () => {
		const wrapper = mount(<Login onChange={jest.fn()} onSubmit={jest.fn()} />);
		expect(wrapper).toMatchSnapshot();
	});
});
