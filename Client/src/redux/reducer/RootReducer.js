import { combineReducers } from 'redux';
import results from './ResultReducer';
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
