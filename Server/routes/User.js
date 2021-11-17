import express from 'express';
import { loginUser, signupUser } from '../controllers/User.js';
const UserRouter = express.Router();

UserRouter.post('/login', loginUser);
UserRouter.post('/signup', signupUser);

export default UserRouter;
