import axios from 'axios';
import { useState } from 'react';
import { TabButton } from './Layout/Profile';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postSignUp } from '../redux/action/User';
const RegisterForm = ({ name }) => {
	const dispatch = useDispatch();
	const url = 'http://localhost:5000';
	const history = useHistory();
	const [user, setUser] = useState({
		type: name,
		name: '',
		email: '',
		password: '',
	});
	const handleChangeInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });

		console.log(user);
	};
	const submitHander = e => {
		e.preventDefault();
		axios.post(`${url}/user/signup`, user).then(res => {
			alert(res.data.message);
			if (res.status === 201) history.push('/');
		});
		dispatch(postSignUp(user));
		console.log(user);
	};

	return (
		<div class="flex justify-center min-h-screen bg-gray-100">
			<div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
				<div class="flex justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-20 h-20 text-blue-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M12 14l9-5-9-5-9 5 9 5z" />
						<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
						/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-center">{name} SignUp Form</h3>
				<form action="">
					<div class="mt-4">
						<div>
							<label class="block" for="username">
								Username
							</label>
							<input
								type="text"
								name="name"
								placeholder="Username"
								value={user.name}
								onChange={handleChangeInput}
								class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
							<span class="text-xs tracking-wide text-red-600">
								Email field is required{' '}
							</span>
						</div>
						<div>
							<label class="block" for="email">
								Email
							</label>
							<input
								type="email"
								name="email"
								placeholder="Email"
								value={user.email}
								onChange={handleChangeInput}
								class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
							<span class="text-xs tracking-wide text-red-600">
								Email field is required{' '}
							</span>
						</div>
						<div class="mt-4">
							<label class="block">Password</label>
							<input
								type="password"
								name="password"
								placeholder="Password"
								value={user.password}
								onChange={handleChangeInput}
								class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</div>
						<div class="flex items-baseline justify-between">
							<button
								onClick={submitHander}
								class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
							>
								SignUp
							</button>
						</div>
						<div className="mt-4">
							<p>OR</p>
							<Link to="/login">
								<button class="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-blue-900">
									Login
								</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
const StudentSignUp = () => {
	return <RegisterForm name="Student" />;
};
const TeacherSignUp = () => {
	return <RegisterForm name="Teacher" />;
};
export const SignUpForm = () => {
	const [active, setActive] = useState('student');
	return (
		<div className=" w-screen flex flex-col justify-center items-center">
			<div>
				<TabButton name="Student SignUp" onclick={e => setActive('student')} />
				<TabButton name="Teacher SignUp" onclick={e => setActive('teacher')} />
			</div>
			<div>
				{active === 'student' && <StudentSignUp />}
				{active === 'teacher' && <TeacherSignUp />}
			</div>
		</div>
	);
};
