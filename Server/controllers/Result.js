import PostResult from '../model/postResult.js';

export const getResult = async (req, res) => {
	try {
		const PostResults = await PostResult.find();
		res.status(200).json(PostResults);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
export const postResult = async (req, res) => {
	const result = req.body;
	const newResult = new PostResult(result);
	try {
		await newResult.save();
		res.status(201).json(newResult);
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};
