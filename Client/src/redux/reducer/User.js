import * as Types from '../types/Type';

export const SignUp = (info = [], action) => {
	switch (action.type) {
		case Types.ADD_SIGNUP_INFO:
			return [...info, action.payload];
		default:
			break;
	}
	return info;
};

export const Login = (info = [], action) => {
	switch (action.type) {
		case Types.ADD_STUDENT_BASIC:
			return [...info, action.payload];
		default:
			break;
	}
	return info;
};
