import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
	reg: String,
	mark: String,
	file: String,
});
const PostResult = mongoose.model('PostResult', postSchema);

export default PostResult;
