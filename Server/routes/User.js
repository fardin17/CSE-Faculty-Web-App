import express from 'express';
import { loginUser, signupUser, getUser } from '../controllers/User.js';
const UserRouter = express.Router();

UserRouter.post('/login', loginUser);
UserRouter.post('/signup', signupUser);
UserRouter.get('/info', getUser);

export default UserRouter;
