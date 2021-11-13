import HomeLayout from '../../components/HomeLayout';
import TeacherCard from '../../components/ProfileCard';

const CCE = () => {
	return (
		<HomeLayout>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<TeacherCard
					src="http://pstu.ac.bd/images/teachers/Dr.%20Md%20AbdulMasud236.jpg"
					name="Dr. Md Abdul Masud"
					designation="Professor"
				/>
				<TeacherCard
					src="http://pstu.ac.bd/images/teachers/Dr.%20Md%20AbdulMasud236.jpg"
					name="Dr. Md Abdul Masud"
					designation="Professor"
				/>
				<TeacherCard
					src="http://pstu.ac.bd/images/teachers/Dr.%20Md%20AbdulMasud236.jpg"
					name="Dr. Md Abdul Masud"
					designation="Professor"
				/>
				<TeacherCard
					src="http://pstu.ac.bd/images/teachers/Dr.%20Md%20AbdulMasud236.jpg"
					name="Dr. Md Abdul Masud"
					designation="Professor"
				/>
				<TeacherCard
					src="http://pstu.ac.bd/images/teachers/Dr.%20Md%20AbdulMasud236.jpg"
					name="Dr. Md Abdul Masud"
					designation="Professor"
				/>
			</div>
		</HomeLayout>
	);
};
export default CCE;
