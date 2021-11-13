import Profile from '../components/Layout/Profile';
import {
	StudentBasic,
	StudentEducation,
	StudentResearch,
	StudentPublication,
	StudentProject,
	StudentAward,
	StudentResult,
} from '../components/StudentInfo';

const StudentProfile = () => {
	return (
		<Profile
			basic={<StudentBasic />}
			education={<StudentEducation />}
			research={<StudentResearch />}
			publication={<StudentPublication />}
			project={<StudentProject />}
			award={<StudentAward />}
			result={<StudentResult />}
		/>
	);
};
export default StudentProfile;
