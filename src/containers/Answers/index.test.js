import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Answers from '.';

import initialState, { sampleAnswer } from '../../commons/initialStates';

describe('<Answers /> container', () => {
	let wrapper;
	let getAllAnswers;

	beforeEach(() => {
		getAllAnswers = jest.fn();
		const mockStore = configureMockStore([thunk]);
		const store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<Answers
					questionId={1}
					answers={[sampleAnswer]}
					getAllAnswers={getAllAnswers}
				/>
			</Provider>
		);
	});

	test('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
