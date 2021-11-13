import express from 'express';
import { getResult, postResult } from '../controllers/Result.js';

const router = express.Router();

router.get('/', getResult);
router.post('/', postResult);
export default router;
