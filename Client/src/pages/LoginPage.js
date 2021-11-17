import { useState } from 'react';
import { AdminLogin, StudentLogin, TeacherLogin } from './LoginForm';
import { TabButton } from '../components/Layout/Profile';

const LoginPage = () => {
	const [active, setActive] = useState('student');
	return (
		<div className=" w-screen flex flex-col justify-center items-center">
			<div>
				<TabButton name="Student" onclick={e => setActive('student')} />
				<TabButton name="Teacher" onclick={e => setActive('teacher')} />
				<TabButton name="Admin" onclick={e => setActive('admin')} />
			</div>
			<div>
				{active === 'student' && <StudentLogin />}
				{active === 'teacher' && <TeacherLogin />}
				{active === 'admin' && <AdminLogin />}
			</div>
		</div>
	);
};
export default LoginPage;
