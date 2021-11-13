import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityInfo, AwardInfo } from './Layout/ActivityInfo';
import { BasicInfo } from './Layout/BasicInfo';
import { EducationInfo } from './Layout/EducationInfo';
import {
	getTeacherBasic,
	getTeacherEducation,
	getTeacherPublication,
	getTeacherProject,
	getTeacherResearch,
	getTeacherAward,
} from '../redux/action/Teacher';

export const TeacherBasic = () => {
	const dispatch = useDispatch();
	const basic = useSelector(state => state.TeacherBasic);

	useEffect(() => {
		dispatch(getTeacherBasic());
	}, [dispatch]);

	return <BasicInfo infos={basic} type="teacher" />;
};
export const TeacherEducation = () => {
	const dispatch = useDispatch();
	const education = useSelector(state => state.TeacherEducation);

	useEffect(() => {
		dispatch(getTeacherEducation());
	}, [dispatch]);
	return <EducationInfo infos={education} type="teacher" />;
};
export const TeacherPublication = () => {
	const dispatch = useDispatch();
	const publication = useSelector(state => state.TeacherPublication);

	useEffect(() => {
		dispatch(getTeacherPublication());
	}, [dispatch]);
	return (
		<ActivityInfo infos={publication} activity="Publication" type="teacher" />
	);
};
export const TeacherResearch = () => {
	const dispatch = useDispatch();
	const research = useSelector(state => state.TeacherResearch);
	useEffect(() => {
		dispatch(getTeacherResearch());
	}, [dispatch]);
	return <ActivityInfo infos={research} activity="Research" type="teacher" />;
};
export const TeacherProject = () => {
	const dispatch = useDispatch();
	const project = useSelector(state => state.TeacherProject);
	useEffect(() => {
		dispatch(getTeacherProject());
	}, [dispatch]);
	return <ActivityInfo infos={project} activity="Project" type="teacher" />;
};
export const TeacherAward = () => {
	const dispatch = useDispatch();
	const award = useSelector(state => state.TeacherAward);

	useEffect(() => {
		dispatch(getTeacherAward());
	}, [dispatch]);
	return <AwardInfo infos={award} type="teacher" />;
};
