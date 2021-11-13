import mongoose from 'mongoose';

const resultSchema = mongoose.Schema({
	results: [Object],
});
export const UploadResult = mongoose.model('UploadResult', resultSchema);

const basicSchema = mongoose.Schema({
	name: String,
	designation: String,
	office: String,
	home: String,
	phone: String,
	email: String,
});
export const TeacherBasic = mongoose.model('TeacherBasic', basicSchema);

const educationSchema = mongoose.Schema({
	degree: String,
	institution: String,
	year: String,
});
export const TeacherEducation = mongoose.model(
	'TeacherEducation',
	educationSchema,
);

const publicationSchema = mongoose.Schema({
	title: String,
	date: String,
	link: String,
	description: String,
});
export const TeacherPublication = mongoose.model(
	'TeacherPublication',
	publicationSchema,
);

const projectSchema = mongoose.Schema({
	title: String,
	date: String,
	link: String,
	description: String,
});
export const TeacherProject = mongoose.model('TeacherProject', projectSchema);
const researchSchema = mongoose.Schema({
	title: String,
	date: String,
	link: String,
	description: String,
});
export const TeacherResearch = mongoose.model(
	'TeacherResearch',
	researchSchema,
);
const awardSchema = mongoose.Schema({
	description: String,
});
export const TeacherAward = mongoose.model('TeacherAward', awardSchema);
