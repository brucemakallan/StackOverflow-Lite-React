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
	},
	questionsReducer: {
		questions: []
	},
	answersReducer: {
		answers: []
	}
};

export const sampleUser = {
	fullName: 'Jack Katto',
	email: 'jack.katto@gmail.com',
	password: 'password#123',
	retypePassword: 'password#123'
};

export const sampleQuestion = {
	id: 1,
	date_posted: '2018-12-27 17:51:48',
	question: 'What makes the world wonders so astounding?',
	user_id: 1
};

export const sampleAnswer = {
	id: 2,
	question_id: 1,
	user_id: 13,
	answer: 'This is a sample answer',
	date_posted: '2018-12-28 07:43:31',
	accepted: false,
	votes: 12
};

export default initialState;
