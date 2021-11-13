import HomeLayout from '../components/HomeLayout';
import ProfileCard from '../components/ProfileCard';

const OfficeStuff = () => {
	return (
		<HomeLayout>
			<div className="border-l-4 border-red-500 md:px-2 px-1 md:m-4 m-2 md:text-3xl text-yellow-600">
				Stuff of Dean Office
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<ProfileCard
					src="http://pstu.ac.bd/cse/images/dean_office_staffs/salma.jpg"
					name="Salma Akter"
					designation="Deputy Registrar"
				/>
				<ProfileCard
					src="http://pstu.ac.bd/cse/images/dean_office_staffs/saiful.jpg"
					name="Saiful Hasan Talukder"
					designation="Section Officer"
				/>
				<ProfileCard
					src="http://pstu.ac.bd/cse/images/dean_office_staffs/nurul_hoque.png"
					name="Md. Nurul Hoque"
					designation="Administrative Officer"
				/>
			</div>
			<div className="border-l-4 border-red-500 md:px-2 px-1 md:m-4 m-2 md:text-3xl text-yellow-600">
				Other Stuff
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<ProfileCard
					src="http://pstu.ac.bd/cse/images/dean_office_staffs/salma.jpg"
					name="Salma Akter"
					designation="Deputy Registrar"
				/>
				<ProfileCard
					src="http://pstu.ac.bd/cse/images/dean_office_staffs/saiful.jpg"
					name="Saiful Hasan Talukder"
					designation="Section Officer"
				/>
				<ProfileCard
					src="http://pstu.ac.bd/cse/images/dean_office_staffs/nurul_hoque.png"
					name="Md. Nurul Hoque"
					designation="Administrative Officer"
				/>
			</div>
		</HomeLayout>
	);
};

export default OfficeStuff;
