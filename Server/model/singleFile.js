import mongoose from 'mongoose';
const singleFileSchema = mongoose.Schema(
	{
		fileName: String,
		fileType: String,
		fileSize: String,
		filePath: String,
	},
	{ timestamps: true },
);

const SingleFile = mongoose.model('SingleFile', singleFileSchema);
export default SingleFile;
