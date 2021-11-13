import { useState } from 'react';
import {
	FcAddDatabase,
	FcDiploma2,
	FcDocument,
	FcLink,
	FcPlanner,
	FcRating,
} from 'react-icons/fc';
import { InputForm, TextareaForm } from './BasicInfo';
import { useDispatch } from 'react-redux';
import {
	postTeacherAward,
	postTeacherProject,
	postTeacherPublication,
	postTeacherResearch,
} from '../../redux/action/Teacher';
import {
	postStudentAward,
	postStudentProject,
	postStudentPublication,
	postStudentResearch,
} from '../../redux/action/Student';
import { DefaultAdd } from './DefaultAdd';
import { FaEdit } from 'react-icons/fa';

export const ActivityInfo = ({ infos, activity, type }) => {
	return (
		<div>
			{infos.length === 0 ? (
				<DefaultAdd
					name={`Add ${activity}s Information`}
					title={`${activity} Information`}
					icon={<FcAddDatabase size={30} />}
					body={<ActivityForm activity={activity} type={type} />}
				/>
			) : (
				<DefaultAdd
					name={`${activity}s`}
					icon={<FaEdit size={30} />}
					title={`${activity} Information`}
					body={<ActivityForm activity={activity} type={type} />}
				/>
			)}
			{infos.map((info, i, arr) => {
				if (arr.length - 1 === i) {
					return (
						<div className="p-2 md:pl-8 ">
							<div className="font-bold text-3xl">{info.title}</div>
							<div className="md:pl-8 md:pr-4 p-2">
								<div className="flex inline ">
									<h1 className="font-bold mr-2">Publication Date:</h1>
									{info.date}
								</div>
								<div className="flex inline ">
									<h1 className="font-bold mr-2">{activity} Link:</h1>
									{info.link}
								</div>
								<div className="flex inline ">
									<h1 className="font-bold mr-2">{activity} Description:</h1>
									{info.description}
								</div>
							</div>
						</div>
					);
				} else return null;
			})}
		</div>
	);
};
export const ActivityForm = ({ activity, type }) => {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({
		title: '',
		date: '',
		link: '',
		description: '',
	});
	const submitHandler = e => {
		e.preventDefault();
		type === 'teacher' &&
			activity === 'Publication' &&
			dispatch(postTeacherPublication(info));
		type === 'teacher' &&
			activity === 'Project' &&
			dispatch(postTeacherProject(info));
		type === 'teacher' &&
			activity === 'Research' &&
			dispatch(postTeacherResearch(info));
		type === 'student' &&
			activity === 'Publication' &&
			dispatch(postStudentPublication(info));
		type === 'student' &&
			activity === 'Project' &&
			dispatch(postStudentProject(info));
		type === 'student' &&
			activity === 'Research' &&
			dispatch(postStudentResearch(info));
		alert('Info Saved!');
	};
	return (
		<div>
			<form className="text-xs md:text-base select-none">
				<InputForm
					name={`${activity} Title`}
					icon={<FcDiploma2 size={25} className=" mr-2" />}
					type="text"
					placeholder={`A huge ${activity}`}
					value={info.title}
					onchange={e => setInfo({ ...info, title: e.target.value })}
				/>
				<InputForm
					name={`${activity} Publication Date`}
					icon={<FcPlanner size={25} className=" mr-2" />}
					type="date"
					value={info.date}
					onchange={e => setInfo({ ...info, date: e.target.value })}
				/>
				<InputForm
					name={`${activity} Link`}
					icon={<FcLink size={25} className=" mr-2" />}
					type="text"
					placeholder={`www.${activity}.com`}
					value={info.link}
					onchange={e => setInfo({ ...info, link: e.target.value })}
				/>
				<TextareaForm
					name={`${activity} Description`}
					icon={<FcDocument size={25} className=" mr-2" />}
					placeholder={`Huge ${activity} description`}
					value={info.description}
					onchange={e => setInfo({ ...info, description: e.target.value })}
				/>
				<div class="flex justify-end">
					<button
						onClick={submitHandler}
						class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export const AwardInfo = ({ infos, type }) => {
	return (
		<div>
			{infos.length === 0 ? (
				<DefaultAdd
					name="Add Awards Information"
					title="Awards Information"
					icon={<FcAddDatabase size={30} />}
					body={<AwardInfoForm type={type} />}
				/>
			) : (
				<DefaultAdd
					name="Awards"
					icon={<FaEdit size={30} />}
					title="Awards Information"
					body={<AwardInfoForm type={type} />}
				/>
			)}
			{infos.map((info, i, arr) => {
				if (arr.length - 1 === i) {
					return <div className="p-4 border">{info.description}</div>;
				} else return null;
			})}
		</div>
	);
};
export const AwardInfoForm = ({ type }) => {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({ description: '' });
	const submitHandler = e => {
		e.preventDefault();
		type === 'teacher'
			? dispatch(postTeacherAward(info))
			: dispatch(postStudentAward(info));
		alert('Info Saved!');
	};
	return (
		<div>
			<TextareaForm
				name="Awards Description"
				icon={<FcRating size={25} className=" mr-2" />}
				placeholder="Huge Awards!"
				value={info.description}
				onchange={e => setInfo({ description: e.target.value })}
			/>
			<div class="flex justify-end">
				<button
					onClick={submitHandler}
					class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
				>
					Submit
				</button>
			</div>
		</div>
	);
};
