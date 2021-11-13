import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className="navbar border-b-2 border-b-gray-600 bg-gray-800">
			<div className="flex justify-between m-auto items-center p-2">
				<div className="flex justify-between items-center gap-x-2 ">
					<Link to="/">
						<img
							className="w-16 h-16 bg-transparent"
							src="http://pstu.ac.bd/images/settings/pstulogo.png"
							alt="Pstu_Logo"
						/>
					</Link>
					<Link to="/">
						<p className="text-xs text-white md:text-2xl ">
							Patuakhali Science and Technology University
						</p>
					</Link>
				</div>

				<div className=" flex justify-between items-center gap-x-2 text-xs md:text-base">
					<button className=" text-yellow-500 hover:text-yellow-200">
						ePayment
					</button>
					<Link to="/login" className=" text-green-500 hover:text-green-200">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
}
