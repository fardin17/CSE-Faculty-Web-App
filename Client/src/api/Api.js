import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchResult = () => axios.get(`${url}/result`);
export const createResult = newResult => axios.post(`${url}/result`, newResult);

export const fetchResultInfo = () => axios.get(`${url}/teacher/result`);
export const createResultInfo = info =>
	axios.post(`${url}/teacher/result`, info);

export const fetchTeacherBasic = () => axios.get(`${url}/teacher/basic`);
export const createTeacherBasic = info =>
	axios.post(`${url}/teacher/basic`, info);
export const fetchTeacherEducation = () =>
	axios.get(`${url}/teacher/education`);
export const createTeacherEducation = info =>
	axios.post(`${url}/teacher/education`, info);
export const fetchTeacherProject = () => axios.get(`${url}/teacher/project`);
export const createTeacherProject = info =>
	axios.post(`${url}/teacher/project`, info);
export const fetchTeacherPublication = () =>
	axios.get(`${url}/teacher/publication`);
export const createTeacherPublication = info =>
	axios.post(`${url}/teacher/publication`, info);
export const fetchTeacherResearch = () => axios.get(`${url}/teacher/research`);
export const createTeacherResearch = info =>
	axios.post(`${url}/teacher/research`, info);
export const fetchTeacherAward = () => axios.get(`${url}/teacher/award`);
export const createTeacherAward = info =>
	axios.post(`${url}/teacher/award`, info);

/* Student Section */

export const fetchStudentBasic = () => axios.get(`${url}/student/basic`);
export const createStudentBasic = info =>
	axios.post(`${url}/student/basic`, info);
export const fetchStudentEducation = () =>
	axios.get(`${url}/student/education`);
export const createStudentEducation = info =>
	axios.post(`${url}/student/education`, info);
export const fetchStudentProject = () => axios.get(`${url}/student/project`);
export const createStudentProject = info =>
	axios.post(`${url}/student/project`, info);
export const fetchStudentPublication = () =>
	axios.get(`${url}/student/publication`);
export const createStudentPublication = info =>
	axios.post(`${url}/student/publication`, info);
export const fetchStudentResearch = () => axios.get(`${url}/student/research`);
export const createStudentResearch = info =>
	axios.post(`${url}/student/research`, info);
export const fetchStudentAward = () => axios.get(`${url}/student/award`);
export const createStudentAward = info =>
	axios.post(`${url}/student/award`, info);
