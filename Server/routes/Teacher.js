import express from 'express';
import {
	teacherBasic,
	getTeacherBasic,
	teacherEducation,
	getTeacherEducation,
	teacherPublication,
	getTeacherPublication,
	teacherProject,
	getTeacherProject,
	teacherResearch,
	getTeacherResearch,
	teacherAward,
	getTeacherAward,
	resultsInfo,
	getResultsInfo,
} from './../controllers/Teacher.js';

const TeacherRouter = express.Router();
TeacherRouter.get('/result', getResultsInfo);
TeacherRouter.post('/result', resultsInfo);
TeacherRouter.get('/basic', getTeacherBasic);
TeacherRouter.post('/basic', teacherBasic);
TeacherRouter.get('/education', getTeacherEducation);
TeacherRouter.post('/education', teacherEducation);
TeacherRouter.get('/publication', getTeacherPublication);
TeacherRouter.post('/publication', teacherPublication);
TeacherRouter.get('/project', getTeacherProject);
TeacherRouter.post('/project', teacherProject);
TeacherRouter.get('/research', getTeacherResearch);
TeacherRouter.post('/research', teacherResearch);
TeacherRouter.get('/award', getTeacherAward);
TeacherRouter.post('/award', teacherAward);

export default TeacherRouter;
