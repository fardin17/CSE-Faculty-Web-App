import * as api from '../../api/Api';
import * as Types from '../types/Type';

export const getResultInfo = () => async dispatch => {
	try {
		const { data } = await api.fetchResultInfo();

		dispatch({ type: Types.GET_RESULT_INFO, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postResultInfo = info => async dispatch => {
	try {
		console.log('Show' + info);
		const { data } = await api.createResultInfo(info);
		dispatch({ type: Types.ADD_RESULT_INFO, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getTeacherBasic = () => async dispatch => {
	try {
		const { data } = await api.fetchTeacherBasic();

		dispatch({ type: Types.GET_TEACHER_BASIC, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postTeacherBasic = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createTeacherBasic(info);
		dispatch({ type: Types.ADD_TEACHER_BASIC, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getTeacherEducation = () => async dispatch => {
	try {
		const { data } = await api.fetchTeacherEducation();

		dispatch({ type: Types.GET_TEACHER_EDUCATION, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postTeacherEducation = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createTeacherEducation(info);
		dispatch({ type: Types.ADD_TEACHER_EDUCATION, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getTeacherProject = () => async dispatch => {
	try {
		const { data } = await api.fetchTeacherProject();

		dispatch({ type: Types.GET_TEACHER_PROJECT, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postTeacherProject = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createTeacherProject(info);
		dispatch({ type: Types.ADD_TEACHER_PROJECT, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getTeacherPublication = () => async dispatch => {
	try {
		const { data } = await api.fetchTeacherPublication();

		dispatch({ type: Types.GET_TEACHER_PUBLICATION, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postTeacherPublication = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createTeacherPublication(info);
		dispatch({ type: Types.ADD_TEACHER_PUBLICATION, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getTeacherResearch = () => async dispatch => {
	try {
		const { data } = await api.fetchTeacherResearch();
		//console.log(data);
		dispatch({ type: Types.GET_TEACHER_RESEARCH, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postTeacherResearch = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createTeacherResearch(info);
		dispatch({ type: Types.ADD_TEACHER_RESEARCH, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
export const getTeacherAward = () => async dispatch => {
	try {
		const { data } = await api.fetchTeacherAward();
		//console.log(data);
		dispatch({ type: Types.GET_TEACHER_AWARD, payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
export const postTeacherAward = info => async dispatch => {
	try {
		//console.log(info);
		const { data } = await api.createTeacherAward(info);
		dispatch({ type: Types.ADD_TEACHER_AWARD, payload: data });
	} catch (err) {
		console.log(`ERROR: ${err.message}`);
	}
};
