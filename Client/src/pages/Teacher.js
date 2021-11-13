import { useState } from 'react';
import Filebase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { postResult } from '../redux/action/Results';
const TeacherProfile = props => {
	const dispatch = useDispatch();

	const [result, setResult] = useState({ reg: '', mark: '', file: '' });
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(postResult(result));
		console.log(result.file);
	};

	return (
		<div class="flex justify-center min-h-screen  bg-gray-100">
			<div class="select-none w-4/6 px-8 py-6 mt-4 text-left bg-white shadow-lg">
				<div class=" flex justify-center">
					<img
						className="bg-transparent w-44 h-auto"
						src="https://www.nicepng.com/png/detail/334-3348387_file-results-icon-remix.png"
						alt="result"
					/>
				</div>
				<h3 class="text-2xl font-bold text-center">Upload student Result</h3>
				<form action="">
					<div class="mt-4">
						<div>
							<label class="block" for="Reg">
								Reg. No.
							</label>
							<input
								type="text"
								placeholder="Registration No"
								value={result.reg}
								onChange={e => setResult({ ...result, reg: e.target.value })}
								class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
							<span class="text-xs tracking-wide text-red-600">
								Reg. No. field is required{' '}
							</span>
						</div>
						<div class="mt-4">
							<label class="block">Total Marks</label>
							<input
								type="text"
								placeholder="Total Marks"
								value={result.mark}
								onChange={e => setResult({ ...result, mark: e.target.value })}
								class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</div>
						<div class="mt-4">
							<label class="block">Paper Image</label>
							<Filebase
								type="file"
								multiple={false}
								onDone={({ base64 }) => setResult({ ...result, file: base64 })}
							/>
						</div>
						<div>
							<input
								type="file"
								onChange={e => console.log(e.target.value)}
							></input>
						</div>
						<div class="flex items-baseline justify-between">
							<button
								onClick={handleSubmit}
								class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TeacherProfile;
