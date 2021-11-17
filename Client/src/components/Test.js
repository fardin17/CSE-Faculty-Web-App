import axios from 'axios';
import { useEffect } from 'react';
//import * as Types from '../redux/types/Type';
import { useDispatch, useSelector } from 'react-redux';
export const Test = () => {
	//const dispatch = useDispatch();
	const info = useSelector(state => state.User);
	const url = 'http://localhost:5000';
	useEffect(() => {
		axios.get(`${url}/user/info`).then(res => {
			console.log(res.data);
		});
		const valueType = localStorage.getItem('type');
		const valueId = localStorage.getItem('id');
		const type = JSON.parse(valueType);
		const id = JSON.parse(valueId);
		console.log('Type is: ' + type);
		console.log('ID is: ' + id);
	});
	return (
		<div>
			<p>Type: </p>
			<h1>Name: </h1>
		</div>
	);
};
