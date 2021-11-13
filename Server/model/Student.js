import mongoose from 'mongoose';

const basicSchema = mongoose.Schema({
	name: String,
	designation: String,
	office: String,
	home: String,
	phone: String,
	email: String,
});
export const StudentBasic = mongoose.model('StudentBasic', basicSchema);

const educationSchema = mongoose.Schema({
	degree: String,
	institution: String,
	year: String,
});
export const StudentEducation = mongoose.model(
	'StudentEducation',
	educationSchema,
);

const publicationSchema = mongoose.Schema({
	title: String,
	date: String,
	link: String,
	description: String,
});
export const StudentPublication = mongoose.model(
	'StudentPublication',
	publicationSchema,
);

const projectSchema = mongoose.Schema({
	title: String,
	date: String,
	link: String,
	description: String,
});
export const StudentProject = mongoose.model('StudentProject', projectSchema);
const researchSchema = mongoose.Schema({
	title: String,
	date: String,
	link: String,
	description: String,
});
export const StudentResearch = mongoose.model(
	'StudentResearch',
	researchSchema,
);
const awardSchema = mongoose.Schema({
	description: String,
});
export const StudentAward = mongoose.model('StudentAward', awardSchema);
