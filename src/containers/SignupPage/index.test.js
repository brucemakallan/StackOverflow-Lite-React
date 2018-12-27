import React from 'react';
import { mount } from 'enzyme';
import { SignupPage, mapDispatchToProps } from '.';
import { sampleUser } from '../../commons/initialStates';

describe('<SignupPage /> container', () => {
	let wrapper;
	let storeUserData;
	let registerUser;

	beforeEach(() => {
		storeUserData = jest.fn();
		registerUser = jest.fn();
		wrapper = mount(
			<SignupPage
				storeUserData={jest.fn()}
				registerUser={jest.fn()}
				user={sampleUser}
				storeUserData={storeUserData}
				registerUser={registerUser}
			/>
		);
	});

	test('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('get user input data', () => {
		wrapper.find('input#email').simulate('change');
		expect(storeUserData).toHaveBeenCalled();
	});

	test('save user data after registration', () => {
		wrapper.find('form').simulate('submit');
		expect(registerUser).toHaveBeenCalled();
	});

	test('presence of required dispatch method', () => {
		const dispatch = jest.fn();
		mapDispatchToProps(dispatch).storeUserData({});
		expect(dispatch.mock.calls[0][0]).toBeDefined();
	});

	test('presence of required dispatch method', () => {
		const dispatch = jest.fn();
		mapDispatchToProps(dispatch).registerUser({});
		expect(dispatch.mock.calls[0][0]).toBeDefined();
	});
});
