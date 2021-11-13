import * as Types from '../types/Type';

export const ResultInfo = (result = [], action) => {
	switch (action.type) {
		case Types.GET_RESULT_INFO:
			return action.payload;

		case Types.ADD_RESULT_INFO:
			return [...result, action.payload];
		default:
			break;
	}
	return result;
};
export const TeacherBasic = (basic = [], action) => {
	switch (action.type) {
		case Types.GET_TEACHER_BASIC:
			return action.payload;

		case Types.ADD_TEACHER_BASIC:
			return [...basic, action.payload];
		default:
			break;
	}
	return basic;
};
export const TeacherEducation = (education = [], action) => {
	switch (action.type) {
		case Types.GET_TEACHER_EDUCATION:
			return action.payload;

		case Types.ADD_TEACHER_EDUCATION:
			return [...education, action.payload];
		default:
			break;
	}
	return education;
};
export const TeacherProject = (project = [], action) => {
	switch (action.type) {
		case Types.GET_TEACHER_PROJECT:
			return action.payload;

		case Types.ADD_TEACHER_PROJECT:
			return [...project, action.payload];
		default:
			break;
	}
	return project;
};
export const TeacherPublication = (publication = [], action) => {
	switch (action.type) {
		case Types.GET_TEACHER_PUBLICATION:
			return action.payload;

		case Types.ADD_TEACHER_PUBLICATION:
			return [...publication, action.payload];
		default:
			break;
	}
	return publication;
};
export const TeacherResearch = (research = [], action) => {
	switch (action.type) {
		case Types.GET_TEACHER_RESEARCH:
			return action.payload;

		case Types.ADD_TEACHER_RESEARCH:
			return [...research, action.payload];
		default:
			break;
	}
	return research;
};
export const TeacherAward = (award = [], action) => {
	switch (action.type) {
		case Types.GET_TEACHER_AWARD:
			return action.payload;

		case Types.ADD_TEACHER_AWARD:
			return [...award, action.payload];
		default:
			break;
	}
	return award;
};
