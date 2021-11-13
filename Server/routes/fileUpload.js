import express from 'express';
import upload from '../helper/FileHelper.js';
import {
	getMutipleFile,
	getSingleFile,
	multipleFile,
	singleFile,
} from '../controllers/fileUpload.js';

const fileRoutes = express.Router();
fileRoutes.post('/singleFile', upload.single('file'), singleFile);
fileRoutes.post('/multipleFile', upload.array('files'), multipleFile);
fileRoutes.get('/singleFile', getSingleFile);
fileRoutes.get('/multipleFile', getMutipleFile);
export default fileRoutes;
