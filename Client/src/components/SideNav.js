import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SideNav = () => {
	const style = {
		box: {
			display: 'flex',
			justifyContent: 'space-between',
			borderBottomWidth: '1px',
			borderBottomColor: 'darkgrey',
			paddingBlock: '4px',
			marginBlock: '8px',
			marginInline: 'none',
			transition: 'all .5s ease-in-out .1s',
			cursor: 'pointer',
		},
		text: {
			borderLeftWidth: '2px',
			borderLeftColor: 'red',
			paddingLeft: '8px',
			marginLeft: '4px',
		},
		deptText: {
			fontSize: '14px',
			borderBottomWidth: '1px',
			borderBottomColor: 'gray',
			paddingLeft: '4px',
			marginLeft: '2px',
		},
	};
	const [isActive, setIsActive] = useState(false);
	const [deptActive, setDeptActive] = useState(false);
	return (
		<div className="select-none md:bg-white md:px-4 px-2 ">
			<Link
				to="/"
				style={style.box}
				className="hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div style={style.text}>Overview</div>
				<IoMdArrowDropright size={30} />
			</Link>
			<Link
				to="/message-from-head"
				style={style.box}
				className="hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div style={style.text}>Messages from Head</div>
				<IoMdArrowDropright size={30} />
			</Link>
			<div
				style={style.box}
				className="hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div className="accordion  w-full " style={style.text}>
					<div className="accordion-item ">
						<div
							className="accordion-title flex justify-between"
							onClick={() => setIsActive(!isActive)}
						>
							<div>Academic</div>
							<div>
								{isActive ? (
									<IoMdArrowDropdown size={30} />
								) : (
									<IoMdArrowDropright size={30} />
								)}
							</div>
						</div>
						{isActive && (
							<div className="accordion-content">
								<Link to="/academic/program">
									<div style={style.deptText}>Program</div>
								</Link>
								<Link to="/academic/admission">
									<div style={style.deptText}>Admission</div>
								</Link>
								<Link to="/academic/curriculam">
									<div style={style.deptText}>Curriculam</div>
								</Link>
								<Link to="/academic/student-engagement">
									<div style={style.deptText}>Student Engagement</div>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>

			<div
				style={style.box}
				className="w-full hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div className="accordion  w-full " style={style.text}>
					<div className="accordion-item ">
						<div
							className="accordion-title flex justify-between"
							onClick={() => setDeptActive(!deptActive)}
						>
							<div>Departments</div>
							<div>
								{deptActive ? (
									<IoMdArrowDropdown size={30} />
								) : (
									<IoMdArrowDropright size={30} />
								)}
							</div>
						</div>
						{deptActive && (
							<div className="accordion-content">
								<Link to="/departments/CIT">
									<div style={style.deptText}>
										Computer Science and Information Technology
									</div>
								</Link>
								<Link to="/departments/CCE">
									<div style={style.deptText}>
										Computer and Communication Engineering
									</div>
								</Link>
								<Link to="/departments/EEE">
									<div style={style.deptText}>
										Electrical and Electronics Engineering
									</div>
								</Link>
								<Link to="/departments/Physics">
									<div style={style.deptText}>
										Physics and Mechanical Engineering
									</div>
								</Link>
								<Link to="/departments/Mathematics">
									<div style={style.deptText}>Mathematics</div>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
			<Link
				to="/office-stuff"
				style={style.box}
				className=" hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div style={style.text}>Office Stuff</div>
				<IoMdArrowDropright size={30} />
			</Link>
			<Link
				to="/research"
				style={style.box}
				className="hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div style={style.text}>Research</div>
				<IoMdArrowDropright size={30} />
			</Link>
			<Link
				to="/activities"
				style={style.box}
				className="hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div style={style.text}>Activies</div>
				<IoMdArrowDropright size={30} />
			</Link>
			<Link
				to="/announcements"
				style={style.box}
				className="hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div style={style.text}>Anouncements</div>
				<IoMdArrowDropright size={30} />
			</Link>
			<Link
				to="/awards"
				style={style.box}
				className="hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div style={style.text}>Awards & Honours</div>
				<IoMdArrowDropright size={30} />
			</Link>

			<Link
				to="/alumni"
				style={style.box}
				className="hover:text-white hover:bg-gray-800 transform hover:translate-x-2 hover:scale-105"
			>
				<div style={style.text}>Alumni</div>
				<IoMdArrowDropright size={30} />
			</Link>
		</div>
	);
};
export default SideNav;
