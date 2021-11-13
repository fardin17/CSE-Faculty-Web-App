import HomeLayout from '../components/HomeLayout';
import ImageCarousel from '../components/ImageCarousal';

function Home() {
	return (
		<HomeLayout>
			<ImageCarousel />
			<div className="border-l-4 border-red-500 md:px-2 px-1 md:m-4 m-2 md:text-3xl text-yellow-600">
				Overview
			</div>
			<div>
				<p>
					The journey of the Faculty of Computer Science and Engineering started
					in a 7th February morning in 2003.. In spite of a humble beginning,
					the department, then known as Faculty of Computer Science, attracted
					the very best minds of the nation and soon accumulated a star studded
					faculty roster as well as the brightest of the students. The Faculty
					started four year B.Sc (Engg.) program in 2003. It is the first
					faculty that introduce the four year B.Sc (Engg.) program in
					Patuakhali Science and Technology University. Initially, the faculty
					started B.Sc (Engg.) program from 2003 with 21 students. With the
					increasing demand of Computer Science graduates for the nation, PSTU
					increased the number of seats for B.Sc (Engg.) program to 60 in 2012.
					So far, 9 batches have completed their undergraduate studies and 4
					batches are currently pursuing their degrees from the faculty . In
					total, the department has 18 active teachers, 4 of whom have already
					earned their PhD degrees. Currently, 4 faculty members are on leave
					for pursuing their PhDs from different universities of the world.
				</p>
			</div>
			<div className="md:text-3xl text-white  grid grid-cols-1 md:grid-cols-3 gap-4  md:py-8 py-2 h-100">
				<div className="bg-red-500 h-40 grid place-content-center rounded-lg ">
					Curriculam
				</div>
				<div className="bg-yellow-500 h-40 md:col-span-2 grid place-content-center rounded-lg">
					News & Events
				</div>
				<div className="bg-green-500 h-40 grid place-content-center rounded-lg">
					Program
				</div>
				<div className="bg-pink-500 h-40 grid place-content-center rounded-lg">
					Admission
				</div>
				<div className="bg-gray-500 h-40 grid place-content-center rounded-lg">
					Department
				</div>
			</div>
		</HomeLayout>
	);
}

export default Home;
