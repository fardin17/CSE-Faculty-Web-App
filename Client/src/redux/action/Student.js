import * as api from '../../api/Api';
import * as Types from '../types/Type';

export const getStudentBasic = () => async dispatch => {
	try {
		const { data } = await api.fetchStudentBasic();

		dispatch({ type: Types.GET_STUDENT_BASIC, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postStudentBasic = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createStudentBasic(info);
		dispatch({ type: Types.ADD_STUDENT_BASIC, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getStudentEducation = () => async dispatch => {
	try {
		const { data } = await api.fetchStudentEducation();

		dispatch({ type: Types.GET_STUDENT_EDUCATION, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postStudentEducation = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createStudentEducation(info);
		dispatch({ type: Types.ADD_STUDENT_EDUCATION, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getStudentProject = () => async dispatch => {
	try {
		const { data } = await api.fetchStudentProject();

		dispatch({ type: Types.GET_STUDENT_PROJECT, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postStudentProject = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createStudentProject(info);
		dispatch({ type: Types.ADD_STUDENT_PROJECT, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getStudentPublication = () => async dispatch => {
	try {
		const { data } = await api.fetchStudentPublication();

		dispatch({ type: Types.GET_STUDENT_PUBLICATION, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postStudentPublication = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createStudentPublication(info);
		dispatch({ type: Types.ADD_STUDENT_PUBLICATION, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getStudentResearch = () => async dispatch => {
	try {
		const { data } = await api.fetchStudentResearch();

		dispatch({ type: Types.GET_STUDENT_RESEARCH, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postStudentResearch = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createStudentResearch(info);
		dispatch({ type: Types.ADD_STUDENT_RESEARCH, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getStudentAward = () => async dispatch => {
	try {
		const { data } = await api.fetchStudentAward();

		dispatch({ type: Types.GET_STUDENT_AWARD, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postStudentAward = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createStudentAward(info);
		dispatch({ type: Types.ADD_STUDENT_AWARD, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
