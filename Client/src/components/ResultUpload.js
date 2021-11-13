import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postResultInfo } from '../redux/action/Teacher';
import { FcAddRow, FcApproval, FcMinus } from 'react-icons/fc';
const ResultUpload = props => {
	const dispatch = useDispatch();

	const [results, setResults] = useState([
		{ reg: '', id: '', mid: '', attendence: '', assignment: '', final: '' },
	]);
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(postResultInfo(results));
		//console.log(results);
	};
	const handleChangeInput = (index, e) => {
		const values = [...results];
		values[index][e.target.name] = e.target.value;
		setResults(values);
	};
	const handleAddRow = () => {
		setResults([
			...results,
			{ reg: '', id: '', mid: '', attendence: '', assignment: '', final: '' },
		]);
	};
	const handleRemoveRow = index => {
		const values = [...results];
		values.splice(index, 1);
		setResults(values);
	};
	return (
		<div class="flex justify-center min-h-screen  bg-gray-100">
			<div class="select-none px-2 py-6 text-left bg-white shadow-lg">
				<div class=" flex justify-center">
					<img
						className="bg-transparent w-44 h-auto"
						src="https://www.nicepng.com/png/detail/334-3348387_file-results-icon-remix.png"
						alt="result"
					/>
				</div>
				<h3 class="text-2xl font-bold text-center">Upload Student Result</h3>
				{results.map((result, index) => {
					return (
						<form action="" key={index}>
							<div class=" flex flex-inline ">
								<div className="mx-2">
									<input
										type="text"
										name="reg"
										placeholder="Registration No"
										value={result.reg}
										onChange={e => handleChangeInput(index, e)}
										class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									/>
								</div>
								<div className="mx-2">
									<input
										type="text"
										name="id"
										placeholder="ID No"
										value={result.id}
										onChange={e => handleChangeInput(index, e)}
										class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									/>
								</div>
								<div className="mx-2">
									<input
										type="text"
										name="attendence"
										placeholder="Attendence"
										value={result.attendence}
										onChange={e => handleChangeInput(index, e)}
										class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									/>
								</div>
								<div className="mx-2">
									<input
										type="text"
										name="assignment"
										placeholder="Assignment"
										value={result.assignment}
										onChange={e => handleChangeInput(index, e)}
										class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									/>
								</div>
								<div className="mx-2">
									<input
										type="text"
										name="mid"
										placeholder="Midterm"
										value={result.mid}
										onChange={e => handleChangeInput(index, e)}
										class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									/>
								</div>
								<div className="mx-2">
									<input
										type="text"
										name="final"
										placeholder="Final"
										value={result.final}
										onChange={e => handleChangeInput(index, e)}
										class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									/>
								</div>
								<FcMinus
									size={40}
									className="mx-2"
									onClick={() => handleRemoveRow(index)}
								/>
								<FcAddRow size={40} className="mx-2 " onClick={handleAddRow} />
							</div>
						</form>
					);
				})}

				<div class="flex justify-center">
					<button
						onClick={handleSubmit}
						class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 flex flex-inline "
					>
						Submit
						<FcApproval size={25} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ResultUpload;
