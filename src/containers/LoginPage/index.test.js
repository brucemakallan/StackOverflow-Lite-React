import React from 'react';
import { mount } from 'enzyme';
import { LoginPage, mapDispatchToProps } from '.';
import { sampleUser } from '../../commons/initialStates';

describe('<LoginPage /> container', () => {
	let wrapper;
	let saveLoginData;
	let loginUser;

	beforeEach(() => {
		saveLoginData = jest.fn();
		loginUser = jest.fn();
		wrapper = mount(
			<LoginPage
				saveLoginData={jest.fn()}
				loginUser={jest.fn()}
				user={sampleUser}
				saveLoginData={saveLoginData}
				loginUser={loginUser}
			/>
		);
	});

	test('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('get user login input data', () => {
		wrapper.find('input#email').simulate('change');
		expect(saveLoginData).toHaveBeenCalled();
	});

	test('save user data after login', () => {
		wrapper.find('form').simulate('submit');
		expect(loginUser).toHaveBeenCalled();
	});

	test('presence of saveLoginData dispatch method', () => {
		const dispatch = jest.fn();
		mapDispatchToProps(dispatch).saveLoginData({});
		expect(dispatch.mock.calls[0][0]).toBeDefined();
	});

	test('presence of loginUser dispatch method', () => {
		const dispatch = jest.fn();
		mapDispatchToProps(dispatch).loginUser({});
		expect(dispatch.mock.calls[0][0]).toBeDefined();
	});
});
