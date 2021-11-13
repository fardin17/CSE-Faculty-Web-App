import Profile from '../components/Layout/Profile';
import {
	TeacherBasic,
	TeacherEducation,
	TeacherResearch,
	TeacherPublication,
	TeacherProject,
	TeacherAward,
} from '../components/TeacherInfo';

const TeacherProfile = () => {
	return (
		<Profile
			basic={<TeacherBasic />}
			education={<TeacherEducation />}
			research={<TeacherResearch />}
			publication={<TeacherPublication />}
			project={<TeacherProject />}
			award={<TeacherAward />}
		/>
	);
};
export default TeacherProfile;
