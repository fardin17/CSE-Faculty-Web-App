import { combineReducers } from 'redux';
import results from './ResultReducer';
import { Login, SignUp } from './User';
import {
	TeacherBasic,
	TeacherAward,
	TeacherResearch,
	TeacherProject,
	TeacherPublication,
	TeacherEducation,
	ResultInfo,
} from './Teacher';
import {
	StudentBasic,
	StudentAward,
	StudentResearch,
	StudentProject,
	StudentPublication,
	StudentEducation,
} from './Student';
const rootReducer = combineReducers({
	results,
	SignUp,
	Login,
	ResultInfo,
	TeacherBasic,
	TeacherAward,
	TeacherResearch,
	TeacherProject,
	TeacherPublication,
	TeacherEducation,
	StudentBasic,
	StudentAward,
	StudentResearch,
	StudentProject,
	StudentPublication,
	StudentEducation,
});
export default rootReducer;
