import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	type: String,
	id: String,
	serial: String,
	name: String,
	email: String,
	password: String,
});
export const User = mongoose.model('User', UserSchema);
