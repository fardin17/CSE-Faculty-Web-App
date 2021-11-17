import * as Types from '../types/Type';

export const User = (info = [], action) => {
	switch (action.type) {
		case Types.GET_USER_INFO:
			return action.payload;
		case Types.ADD_USER_INFO:
			return [...info, action.payload];
		default:
			break;
	}
	return info;
};
