import {
	TeacherAward,
	TeacherBasic,
	TeacherEducation,
	TeacherProject,
	TeacherPublication,
	TeacherResearch,
	UploadResult,
} from './../model/Teacher.js';
export const resultsInfo = async (req, res, next) => {
	try {
		let results = [];
		req.body.forEach(result => {
			const file = {
				reg: result.reg,
				id: result.id,
				attendence: result.attendence,
				assignment: result.assignment,
				mid: result.mid,
				final: result.final,
			};
			results.push(file);
		});
		const info = new UploadResult({
			results,
		});
		await info.save();
		res.status(201).send(results);
	} catch (error) {
		res.status(400).send(`Error ${error.message}`);
	}
};
export const getResultsInfo = async (req, res, next) => {
	try {
		const data = await UploadResult.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const teacherBasic = async (req, res, next) => {
	const data = req.body;
	const info = new TeacherBasic(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getTeacherBasic = async (req, res, next) => {
	try {
		const data = await TeacherBasic.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const teacherEducation = async (req, res, next) => {
	const data = req.body;
	const info = new TeacherEducation(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getTeacherEducation = async (req, res, next) => {
	try {
		const data = await TeacherEducation.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const teacherPublication = async (req, res, next) => {
	const data = req.body;
	const info = new TeacherPublication(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getTeacherPublication = async (req, res, next) => {
	try {
		const data = await TeacherPublication.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const teacherProject = async (req, res, next) => {
	const data = req.body;
	const info = new TeacherProject(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getTeacherProject = async (req, res, next) => {
	try {
		const data = await TeacherProject.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const teacherResearch = async (req, res, next) => {
	const data = req.body;
	const info = new TeacherResearch(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getTeacherResearch = async (req, res, next) => {
	try {
		const data = await TeacherResearch.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const teacherAward = async (req, res, next) => {
	const data = req.body;
	const info = new TeacherAward(data);
	try {
		await info.save();
		res.status(201).send(info);
	} catch (error) {
		res.status(409).send(error.message);
	}
};
export const getTeacherAward = async (req, res, next) => {
	try {
		const data = await TeacherAward.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
