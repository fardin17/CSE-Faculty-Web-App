import * as Types from '../types/Type';

export const StudentBasic = (basic = [], action) => {
	switch (action.type) {
		case Types.GET_STUDENT_BASIC:
			return action.payload;

		case Types.ADD_STUDENT_BASIC:
			return [...basic, action.payload];
		default:
			break;
	}
	return basic;
};
export const StudentEducation = (education = [], action) => {
	switch (action.type) {
		case Types.GET_STUDENT_EDUCATION:
			return action.payload;

		case Types.ADD_STUDENT_EDUCATION:
			return [...education, action.payload];
		default:
			break;
	}
	return education;
};
export const StudentProject = (project = [], action) => {
	switch (action.type) {
		case Types.GET_STUDENT_PROJECT:
			return action.payload;

		case Types.ADD_STUDENT_PROJECT:
			return [...project, action.payload];
		default:
			break;
	}
	return project;
};
export const StudentPublication = (publication = [], action) => {
	switch (action.type) {
		case Types.GET_STUDENT_PUBLICATION:
			return action.payload;

		case Types.ADD_STUDENT_PUBLICATION:
			return [...publication, action.payload];
		default:
			break;
	}
	return publication;
};
export const StudentResearch = (research = [], action) => {
	switch (action.type) {
		case Types.GET_STUDENT_RESEARCH:
			return action.payload;

		case Types.ADD_STUDENT_RESEARCH:
			return [...research, action.payload];
		default:
			break;
	}
	return research;
};
export const StudentAward = (award = [], action) => {
	switch (action.type) {
		case Types.GET_STUDENT_AWARD:
			return action.payload;

		case Types.ADD_STUDENT_AWARD:
			return [...award, action.payload];
		default:
			break;
	}
	return award;
};
