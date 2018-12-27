import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import QuestionsPageConnected, { QuestionsPage } from '.';

import initialState, { sampleQuestion } from '../../commons/initialStates';

describe('<QuestionsPage /> container', () => {
	let wrapper;
	let getAllQuestions;

	beforeEach(() => {
		getAllQuestions = jest.fn();
		const mockStore = configureMockStore([thunk]);
		const store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<QuestionsPageConnected
					questions={[sampleQuestion]}
					getAllQuestions={getAllQuestions}
				/>
			</Provider>
		);
	});

	test('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('renders correctly without questions', () => {
		wrapper = mount(
			<QuestionsPage
				questions={[]}
				getAllQuestions={getAllQuestions}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
