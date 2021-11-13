import express from 'express';
import {
	studentBasic,
	getStudentBasic,
	studentEducation,
	getStudentEducation,
	studentPublication,
	getStudentPublication,
	studentProject,
	getStudentProject,
	studentResearch,
	getStudentResearch,
	studentAward,
	getStudentAward,
} from './../controllers/Student.js';

const StudentRouter = express.Router();
StudentRouter.get('/basic', getStudentBasic);
StudentRouter.post('/basic', studentBasic);
StudentRouter.get('/education', getStudentEducation);
StudentRouter.post('/education', studentEducation);
StudentRouter.get('/publication', getStudentPublication);
StudentRouter.post('/publication', studentPublication);
StudentRouter.get('/project', getStudentProject);
StudentRouter.post('/project', studentProject);
StudentRouter.get('/research', getStudentResearch);
StudentRouter.post('/research', studentResearch);
StudentRouter.get('/award', getStudentAward);
StudentRouter.post('/award', studentAward);

export default StudentRouter;
