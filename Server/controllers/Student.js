import {
	StudentAward,
	StudentBasic,
	StudentEducation,
	StudentProject,
	StudentPublication,
	StudentResearch,
} from './../model/Student.js';
export const studentBasic = async (req, res, next) => {
	const data = req.body;
	const info = new StudentBasic(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getStudentBasic = async (req, res, next) => {
	try {
		const data = await StudentBasic.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const studentEducation = async (req, res, next) => {
	const data = req.body;
	const info = new StudentEducation(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getStudentEducation = async (req, res, next) => {
	try {
		const data = await StudentEducation.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const studentPublication = async (req, res, next) => {
	const data = req.body;
	const info = new StudentPublication(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getStudentPublication = async (req, res, next) => {
	try {
		const data = await StudentPublication.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const studentProject = async (req, res, next) => {
	const data = req.body;
	const info = new StudentProject(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getStudentProject = async (req, res, next) => {
	try {
		const data = await StudentProject.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const studentResearch = async (req, res, next) => {
	const data = req.body;
	const info = new StudentResearch(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getStudentResearch = async (req, res, next) => {
	try {
		const data = await StudentResearch.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const studentAward = async (req, res, next) => {
	const data = req.body;
	const info = new StudentAward(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getStudentAward = async (req, res, next) => {
	try {
		const data = await StudentAward.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
