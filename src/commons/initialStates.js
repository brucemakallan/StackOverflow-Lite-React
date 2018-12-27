const initialState = {
	signupReducer: {
		user: {
			fullName: '',
			email: '',
			password: '',
			retypePassword: ''
		}
	},
	loginReducer: {
		user: {
			email: '',
			password: ''
		}
	}
};

export const sampleUser = {
	fullName: 'Jack Katto',
	email: 'jack.katto@gmail.com',
	password: 'password#123',
	retypePassword: 'password#123'
};

export default initialState;