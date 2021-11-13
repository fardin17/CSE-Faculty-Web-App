import mongoose from 'mongoose';

const multipleFileSchema = mongoose.Schema(
	{
		title: String,
		files: [Object],
	},
	{ timestamps: true },
);
const MutipleFile = mongoose.model('MutipleFile', multipleFileSchema);
export default MutipleFile;
