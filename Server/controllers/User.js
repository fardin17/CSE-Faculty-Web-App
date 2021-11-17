import { User } from '../model/User.js';
export const signupUser = async (req, res, next) => {
	const { type, id, name, email, password } = req.body;
	const serial = (await User.countDocuments({ type: 'Teacher' }).exec()) + 101;
	console.log(serial);
	let info = {};
	type === 'Teacher'
		? (info = new User({
				type,
				serial,
				name,
				email,
				password,
		  }))
		: (info = new User({
				type,
				id,
				name,
				email,
				password,
		  }));
	User.findOne({ email: email }, (err, user) => {
		if (user) {
			res.send({ message: 'Already User!' });
		} else {
			info.save(err => {
				if (err) {
					res.status(409).send({ message: "User can't register" });
				} else {
					res.status(201).send({
						message: 'Successfully Registered!',
						user: info,
					});
				}
			});
		}
	});
};

export const getUser = async (req, res, next) => {
	try {
		const data = await User.find();
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error.message);
	}
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
