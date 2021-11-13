import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../img/2021-09-26T15-26-40.846Z-Fardin_Resume.pdf';
import { getResult } from '../redux/action/Results';
import { useDispatch, useSelector } from 'react-redux';

const StudentProfile = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getResult());
	}, [dispatch]);
	const results = useSelector(state => state.results);
	console.log(results[2]);

	return (
		<div>
			<div>Hey i am Fardin</div>

			{/* <div>My Reg No. - {results[1].reg}</div>
			<div>My mark - {results[1].mark}</div>
			<div>
				<img src={results[1].file} alt="" />
			</div> */}
			<Link to={pdf} target="_blank" download>
				Download PDF
			</Link>
		</div>
	);
};
export default StudentProfile;
