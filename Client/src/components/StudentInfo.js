import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityInfo, AwardInfo } from './Layout/ActivityInfo';
import { BasicInfo } from './Layout/BasicInfo';
import { EducationInfo } from './Layout/EducationInfo';
import {
	getStudentBasic,
	getStudentEducation,
	getStudentPublication,
	getStudentProject,
	getStudentResearch,
	getStudentAward,
} from './../redux/action/Student';
import { getResultInfo } from './../redux/action/Teacher';
import { ResultInfo } from './ResultInfo';

export const StudentResult = () => {
	const dispatch = useDispatch();
	const result = useSelector(state => state.ResultInfo);

	useEffect(() => {
		dispatch(getResultInfo());
	}, [dispatch]);

	return <ResultInfo infos={result} />;
};
export const StudentBasic = () => {
	const dispatch = useDispatch();
	const basic = useSelector(state => state.StudentBasic);

	useEffect(() => {
		dispatch(getStudentBasic());
	}, [dispatch]);

	return <BasicInfo infos={basic} type="student" />;
};
export const StudentEducation = () => {
	const dispatch = useDispatch();
	const education = useSelector(state => state.StudentEducation);

	useEffect(() => {
		dispatch(getStudentEducation());
	}, [dispatch]);
	return <EducationInfo infos={education} type="student" />;
};
export const StudentPublication = () => {
	const dispatch = useDispatch();
	const publication = useSelector(state => state.StudentPublication);

	useEffect(() => {
		dispatch(getStudentPublication());
	}, [dispatch]);
	return (
		<ActivityInfo infos={publication} activity="Publication" type="student" />
	);
};
export const StudentResearch = () => {
	const dispatch = useDispatch();
	const research = useSelector(state => state.StudentResearch);
	useEffect(() => {
		dispatch(getStudentResearch());
		dispatch(getStudentProject());
	}, [dispatch]);
	return <ActivityInfo infos={research} activity="Research" type="student" />;
};
export const StudentProject = () => {
	const dispatch = useDispatch();
	const project = useSelector(state => state.StudentProject);
	useEffect(() => {
		dispatch(getStudentProject());
	}, [dispatch]);
	return <ActivityInfo infos={project} activity="Project" type="student" />;
};
export const StudentAward = () => {
	const dispatch = useDispatch();
	const award = useSelector(state => state.StudentAward);

	useEffect(() => {
		dispatch(getStudentAward());
	}, [dispatch]);
	return <AwardInfo infos={award} type="student" />;
};
