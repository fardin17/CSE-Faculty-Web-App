import * as Types from '../types/Type';

const resultReducer = (results = [], action) => {
	switch (action.type) {
		case Types.GET_RESULT:
			return action.payload;

		case Types.ADD_RESULT:
			return [...results, action.payload];
		default:
			break;
	}
	return results;
};
export default resultReducer;
