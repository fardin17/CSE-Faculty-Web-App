import express from 'express';
import path from 'path';
import cors from 'cors';
import resultRoutes from './routes/Results.js';
import fileRoutes from './routes/fileUpload.js';
import TeacherRoutes from './routes/Teacher.js';
import StudentRoutes from './routes/Student.js';
import mongoose from 'mongoose';

const app = express();
const __dirname = path.resolve();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ origin: true, credentials: true }));

const CONNECTION_URL =
	'mongodb+srv://fardin17:fardincse14@cluster0.4xl6z.mongodb.net/test';

const PORT = process.env.PORT || 5000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/result', resultRoutes);
app.use('/teacher', TeacherRoutes);
app.use('/student', StudentRoutes);
app.use('/api', fileRoutes);

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlparser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server runing on port: ${PORT}`);
		});
	})
	.catch(error => {
		console.log(error.message);
	});
