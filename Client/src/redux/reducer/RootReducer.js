import { combineReducers } from 'redux';
import results from './ResultReducer';
import { User } from './User';
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
	User,
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
