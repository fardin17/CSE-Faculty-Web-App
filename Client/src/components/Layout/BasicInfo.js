import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import {
	FcAddDatabase,
	FcBusinessman,
	FcCallback,
	FcDepartment,
	FcFeedback,
	FcHome,
	FcOrganization,
} from 'react-icons/fc';
import { postTeacherBasic } from '../../redux/action/Teacher';
import { postStudentBasic } from '../../redux/action/Student';
import { DefaultAdd } from './DefaultAdd';

export const BasicInfo = ({ infos, type }) => {
	console.log(infos.length);
	return (
		<div>
			{infos.length === 0 && (
				<DefaultAdd
					name="Add Information"
					title="Basic Information"
					icon={<FcAddDatabase size={30} />}
					body={<BasicInfoForm type={type} />}
				/>
			)}
			{infos.map((info, i, arr) => {
				if (arr.length - 1 === i) {
					return (
						<div>
							<div className="border-b border-t pb-8 md:pb-4 px-4 md:px-2 ">
								<h1 className="md:text-4xl text-2xl py-4 md:py-2 ">
									{info.name}
								</h1>
								{type === 'teacher' && (
									<p className="italic">{info.designation}</p>
								)}
							</div>
							<div className="pb-8 md:pb-4 px-4 md:px-2 ">
								<DefaultAdd
									name="Contact Information"
									title="Basic Information"
									icon={<FaEdit size={30} />}
									body={<BasicInfoForm type={type} />}
								/>

								<div className="md:pl-8 md:pr-4 p-2">
									{type === 'teacher' && (
										<div className="flex inline ">
											<FcDepartment size={22} className=" mr-2" />{' '}
											<h1 className="font-bold mr-2">Office Address:</h1>
											{info.office}
										</div>
									)}
									<div className="flex inline ">
										<FcHome size={22} className=" mr-2" />{' '}
										<h1 className="font-bold mr-2">Home Address:</h1>
										{info.home}
									</div>
									<div className="flex inline ">
										<FcCallback size={22} className=" mr-2" />{' '}
										<h1 className="font-bold mr-2">Mobile/Phone No:</h1>
										{info.phone}
									</div>
									<div className="flex inline ">
										<FcFeedback size={22} className=" mr-2" />{' '}
										<h1 className="font-bold mr-2">Email:</h1>
										{info.email}
									</div>
								</div>
							</div>
						</div>
					);
				} else return null;
			})}
		</div>
	);
};
export const BasicInfoForm = ({ type }) => {
	const dispatch = useDispatch();
	console.log(type);
	const [info, setInfo] = useState({
		name: '',
		designation: '',
		office: '',
		home: '',
		phone: '',
		email: '',
	});

	const submitHandler = e => {
		e.preventDefault();
		type === 'teacher'
			? dispatch(postTeacherBasic(info))
			: dispatch(postStudentBasic(info));
	};

	return (
		<div>
			<form className="text-xs md:text-base">
				<InputForm
					name="Name"
					icon={<FcBusinessman size={25} className=" mr-2" />}
					type="text"
					placeholder="Md. A"
					value={info.name}
					onchange={e => setInfo({ ...info, name: e.target.value })}
				/>
				{type === 'teacher' && (
					<InputForm
						name=" Designation"
						icon={<FcOrganization size={25} className=" mr-2" />}
						type="text"
						placeholder="Lecturer"
						value={info.designation}
						onchange={e => setInfo({ ...info, designation: e.target.value })}
					/>
				)}
				{type === 'teacher' && (
					<InputForm
						name=" Office Address"
						icon={<FcDepartment size={25} className=" mr-2" />}
						type="text"
						placeholder="#Room,#Dept,#Building"
						value={info.office}
						onchange={e => setInfo({ ...info, office: e.target.value })}
					/>
				)}

				<InputForm
					name="Home Address"
					icon={<FcHome size={25} className=" mr-2" />}
					type="text"
					placeholder="#Upzila,#Zila,#Divison"
					value={info.home}
					onchange={e => setInfo({ ...info, home: e.target.value })}
				/>
				<InputForm
					name="Mobile/Phone No"
					icon={<FcCallback size={25} className=" mr-2" />}
					type="text"
					placeholder="+880"
					value={info.phone}
					onchange={e => setInfo({ ...info, phone: e.target.value })}
				/>
				<InputForm
					name="Email"
					icon={<FcFeedback size={22} className=" mr-2" />}
					type="email"
					placeholder="aaa@cse.pstu.ac.bd"
					value={info.email}
					onchange={e => setInfo({ ...info, email: e.target.value })}
				/>
				<div class="flex justify-end">
					<button
						class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
						onClick={submitHandler}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
export const InputForm = ({
	name,
	icon,
	type,
	placeholder,
	value,
	onchange,
}) => {
	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="flex inline pt-4">
				{icon}
				<div> {name}:</div>
			</div>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onchange}
				className="col-span-2 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
			/>
		</div>
	);
};
export const TextareaForm = ({ name, icon, placeholder, value, onchange }) => {
	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="flex inline pt-4">
				{icon}
				<div> {name}:</div>
			</div>
			<textarea
				placeholder={placeholder}
				value={value}
				onChange={onchange}
				className="col-span-2 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
			/>
		</div>
	);
};
