import { User } from '../model/User.js';
export const signupUser = async (req, res, next) => {
	const { name, email, password } = req.body;
	const info = new User({
		name,
		email,
		password,
	});
	User.findOne({ email: email }, (err, user) => {
		if (user) {
			res.send({ message: 'Already User!' });
		} else {
			info.save(err => {
				if (err) {
					res.status(409).send({ message: "User can't register" });
				} else {
					res.status(201).send({ message: 'User Registered!' });
				}
			});
		}
	});
};
export const loginUser = async (req, res, next) => {
	const { email, password } = req.body;
	User.findOne({ email: email }, (err, user) => {
		if (user) {
			if (password === user.password) {
				res.send({ message: 'Successfully Login', user: user });
			} else {
				res.send({ message: 'Password not match' });
			}
		} else {
			res.send({ message: 'User not registered!' });
		}
	});
};
