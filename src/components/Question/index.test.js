import React from 'react';
import { shallow } from 'enzyme';
import Question from '.';
import { sampleQuestion } from '../../commons/initialStates';

describe('<Question /> component tests', () => {
	test('renders correctly', () => {
		const wrapper = shallow(<Question question={sampleQuestion} />);
		expect(wrapper).toMatchSnapshot();
	});
});
