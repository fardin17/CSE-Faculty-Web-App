import * as api from '../../api/Api';
import * as Types from '../types/Type';

export const getResult = () => async dispatch => {
	try {
		const { data } = await api.fetchResult();
		dispatch({ type: Types.GET_RESULT, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postResult = newResult => async dispatch => {
	try {
		console.log(newResult);
		const { data } = await api.createResult(newResult);
		dispatch({ type: Types.ADD_RESULT, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
