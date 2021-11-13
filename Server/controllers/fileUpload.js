import SingleFile from '../model/singleFile.js';
import MutipleFile from '../model/multipleFile.js';
const singleFile = async (req, res, next) => {
	try {
		const file = new SingleFile({
			fileName: req.file.originalname,
			filePath: req.file.path,
			fileType: req.file.mimetype,
			fileSize: fileSizeFormatter(req.file.size, 2),
		});
		await file.save();
		console.log(file);
		res.status(201).send('File Uploaded Successfully');
	} catch (error) {
		res.status(400).send(`Single File Error ${error.message}`);
	}
};
const getSingleFile = async (req, res, next) => {
	try {
		const file = await SingleFile.find();
		res.status(200).send(file);
	} catch (error) {
		res.status(400).send(error.message);
	}
};
const multipleFile = async (req, res, next) => {
	try {
		let filesArray = [];
		req.files.forEach(element => {
			const file = {
				fileName: element.originalname,
				filePath: element.path,
				fileType: element.mimetype,
				fileSize: fileSizeFormatter(element.size, 2),
			};
			filesArray.push(file);
		});
		const multipleFiles = new MutipleFile({
			title: req.body.title,
			files: filesArray,
		});
		await multipleFiles.save();
		res.status(201).send('Multiple File Uploaded Successfully');
	} catch (error) {
		res.status(400).send(`Multiple File Error ${error.message}`);
	}
};
const getMutipleFile = async (req, res, next) => {
	try {
		const file = await MutipleFile.find();
		res.status(201).send(file);
	} catch (error) {
		res.status(400).send(error.message);
	}
};
const fileSizeFormatter = (bytes, decimal) => {
	if (bytes === 0) return '0 Bytes';
	const dm = decimal || 2;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
	const index = Math.floor(Math.log(bytes) / Math.log(1000));
	return (
		parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
	);
};
export { singleFile, multipleFile, getSingleFile, getMutipleFile };
