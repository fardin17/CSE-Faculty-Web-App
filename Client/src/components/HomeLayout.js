import SideNav from './SideNav';

const HomeLayout = props => {
	return (
		<div className="md:bg-gradient-to-b from-blue-400 to-blue-100 md:min-h-screen">
			<div className="select-none md:text-4xl md:px-20 px-4 md:py-10 py-4 md:text-white ">
				Computer Science & Engineering
			</div>
			<div className="select-none grid grid-cols-1 md:grid-cols-4 gap-8 md:px-20 px-4 ">
				<SideNav />
				<div className="md:col-span-3">{props.children}</div>
			</div>
		</div>
	);
};
export default HomeLayout;
