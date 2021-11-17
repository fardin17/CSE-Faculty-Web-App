import * as api from '../../api/Api';
import * as Types from '../types/Type';

export const postSignUp = info => async dispatch => {
	try {
		const { data } = await api.postSignup(info);
		dispatch({ type: Types.ADD_SIGNUP_INFO, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const postLogin = (info, setUserLogin) => async dispatch => {
	try {
		const { data } = await api.postLogin(info, setUserLogin);
		console.log('Data' + info);
		dispatch({ type: Types.ADD_LOGIN_INFO, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
