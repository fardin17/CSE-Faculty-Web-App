import HomeLayout from '../components/HomeLayout';

const HeadMessage = () => {
	return (
		<HomeLayout>
			<div className="border-l-4 border-red-500 md:px-2 px-1 md:m-4 m-2 md:text-3xl text-yellow-600">
				Message from Head
			</div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<img
					src="http://pstu.ac.bd/images/teachers/1532863496.jpg"
					className="w-full h-auto"
					alt=""
				/>
				<div className="md:col-span-3">
					The Faculty of Computer Science and Engineering (CSE) offers a
					four-year program which leads the degree of Bachelor of Science in
					Computer Science and Engineering – in short B.Sc. Engg (CSE). The CSE
					faculty started just after the university was established and 41
					students were admitted into the program in the first session which was
					2003-2004 sesion. Till now, 400 students from 11 batches completed
					their degree and are working in different government and
					non-government organizations. Currently, 230 students are studying in
					four batches in the faculty. The faculty has five departments namely –
					department of Computer Science and Information Technology (CSIT),
					department of Computer and Communication Engineering (CCE), department
					of Electrical and Electronic Engineering (EEE), department of
					Mathematics (Math) and department of Physics and Mechanical
					Engineering (PME). These departments offer different relevant courses
					of the bachelor degree in CSE. The faculty has 21 teachers in these
					five departments among whom five are PhD holders. The faculty of CSE
					has 5 laboratories such as – Programming Lab, Computer Network Lab,
					Microprocessors and Microcomputers Lab, Electrical and Electronic Lab
					and Physics and Mechanical Lab. Recently, honorable state minister of
					Information and Communication Technologies department Junaid Ahmed
					Palak granted 8.6 million taka to establish a lab named Advanced
					Computing Lab. Moreover, a Mobile Computng Lab development lab was
					also established by the department of Information and Communication
					Technologies, Government of Bangladesh.
				</div>
			</div>
		</HomeLayout>
	);
};

export default HeadMessage;
