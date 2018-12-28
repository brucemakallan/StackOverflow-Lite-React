import React from 'react';
import { shallow } from 'enzyme';
import Banner from '.';

describe('<Banner /> component tests', () => {
	test('renders correctly', () => {
		const wrapper = shallow(<Banner />);
		expect(wrapper).toMatchSnapshot();
	});
});
