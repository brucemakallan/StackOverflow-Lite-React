import React from 'react';
import { shallow } from 'enzyme';
import Answer from '.';
import { sampleAnswer } from '../../commons/initialStates';

describe('<Answer /> component tests', () => {
	test('renders correctly', () => {
		const wrapper = shallow(<Answer answer={sampleAnswer} />);
		expect(wrapper).toMatchSnapshot();
	});
});
