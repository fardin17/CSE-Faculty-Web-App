import { useState } from 'react';
import {
	FcAddDatabase,
	FcDepartment,
	FcGraduationCap,
	FcPlanner,
} from 'react-icons/fc';
import { InputForm } from './BasicInfo';
import { postTeacherEducation } from '../../redux/action/Teacher';
import { postStudentEducation } from '../../redux/action/Student';
import { useDispatch } from 'react-redux';
import { DefaultAdd } from './DefaultAdd';
import { FaEdit } from 'react-icons/fa';

export const EducationInfo = ({ infos, type }) => {
	return (
		<div>
			{infos.length === 0 ? (
				<DefaultAdd
					name="Add Academic Information"
					title="Academic Information"
					icon={<FcAddDatabase size={30} />}
					body={<EducationInfoForm type={type} />}
				/>
			) : (
				<DefaultAdd
					name="Educations"
					icon={<FaEdit size={30} />}
					title="Academic Information"
					body={<EducationInfoForm type={type} />}
				/>
			)}
			{infos.map((info, i, arr) => {
				if (arr.length - 1 === i) {
					return (
						<div>
							<div className="p-2 md:pl-8 ">
								<div className="font-bold">{info.degree}</div>
								<div className="italic">{info.institution}</div>
								<div className="italic">{info.year}</div>
							</div>
						</div>
					);
				} else return null;
			})}
		</div>
	);
};

export const EducationInfoForm = ({ type }) => {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({
		degree: '',
		institution: '',
		year: '',
	});
	const submitHandler = e => {
		e.preventDefault();

		type === 'teacher'
			? dispatch(postTeacherEducation(info))
			: dispatch(postStudentEducation(info));
	};
	return (
		<div>
			<form className="text-xs md:text-base">
				<InputForm
					name="Degree"
					icon={<FcGraduationCap size={25} className=" mr-2" />}
					type="text"
					placeholder="B.sc in CSE"
					value={info.degree}
					onchange={e => setInfo({ ...info, degree: e.target.value })}
				/>
				<InputForm
					name="Institution"
					icon={<FcDepartment size={25} className=" mr-2" />}
					type="text"
					placeholder="Patuakhali Science and Technology University"
					value={info.institution}
					onchange={e => setInfo({ ...info, institution: e.target.value })}
				/>
				<InputForm
					name="Passing Year"
					icon={<FcPlanner size={25} className=" mr-2" />}
					type="text"
					placeholder="2000 "
					value={info.year}
					onchange={e => setInfo({ ...info, year: e.target.value })}
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
