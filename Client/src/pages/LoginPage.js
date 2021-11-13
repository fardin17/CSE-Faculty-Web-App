import React from 'react';
import { TabGroup } from '@statikly/funk';
import { AdminLogin, StudentLogin, TeacherLogin } from './LoginForm';

const LoginPage = () => {
	return (
		<div className=" w-screen flex flex-col justify-center items-center">
			<TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
				<TabGroup.TabList>
					<TabGroup.Tab
						index={0}
						className="h-12 px-12 transition-colors duration-150"
						activeClassName="bg-black text-white"
						inactiveClassName="text-black"
					>
						Student
					</TabGroup.Tab>
					<TabGroup.Tab
						index={1}
						className="h-12 px-12 transition-colors duration-150"
						activeClassName="bg-black text-white"
						inactiveClassName="text-black"
					>
						Teacher
					</TabGroup.Tab>
					<TabGroup.Tab
						index={2}
						className="h-12 px-12 transition-colors duration-150"
						activeClassName="bg-black text-white"
						inactiveClassName="text-black"
					>
						Admin
					</TabGroup.Tab>
				</TabGroup.TabList>
				<TabGroup.TabPanel
					index={0}
					className="p-16 transition-all transform h-64"
					activeClassName="opacity-100 duration-500 translate-x-0"
					inactiveClassName="absolute opacity-0 -translate-x-2"
				>
					<StudentLogin />
				</TabGroup.TabPanel>
				<TabGroup.TabPanel
					index={1}
					className="p-16 transition-all transform h-64 flex flex-col"
					activeClassName="opacity-100 duration-500 translate-x-0"
					inactiveClassName="absolute opacity-0 -translate-x-2"
				>
					<TeacherLogin />
				</TabGroup.TabPanel>
				<TabGroup.TabPanel
					index={2}
					className="p-16 transition-all transform h-64"
					activeClassName="opacity-100 duration-500 translate-x-0"
					inactiveClassName="absolute opacity-0 -translate-x-2"
				>
					<AdminLogin />
				</TabGroup.TabPanel>
			</TabGroup>
		</div>
	);
};
export default LoginPage;
