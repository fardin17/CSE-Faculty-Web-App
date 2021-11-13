import { useState } from 'react';

const TeacherProfile = ({
	basic,
	education,
	research,
	publication,
	project,
	award,
	result,
}) => {
	const [active, setActive] = useState('basic');
	return (
		<div className="select-none grid grid-cols-1 md:grid-cols-4 gap-4 mx-4 my-2 md:mx-8 md:my-4">
			<div className="md:border-r md:h-screen px-4 py-2 md:px-8 md:py-4">
				<img
					className="bg-transparent"
					src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
					alt=""
				/>
			</div>
			<div className="md:col-span-3">
				<div className="flex flex-wrap justify-start ">
					<TabButton name="Basic Info" onclick={e => setActive('basic')} />
					<TabButton name="Education" onclick={e => setActive('education')} />
					<TabButton name="Researches" onclick={e => setActive('research')} />
					<TabButton
						name="Publications"
						onclick={e => setActive('publication')}
					/>
					<TabButton name="Projects" onclick={e => setActive('project')} />
					<TabButton name="Awards" onclick={e => setActive('award')} />
					<TabButton name="Results" onclick={e => setActive('result')} />
				</div>
				<div>
					{active === 'basic' && basic}
					{active === 'education' && education}
					{active === 'research' && research}
					{active === 'publication' && publication}
					{active === 'project' && project}
					{active === 'award' && award}
					{active === 'result' && result}
				</div>
			</div>
		</div>
	);
};
export default TeacherProfile;
export const TabButton = ({ name, onclick }) => {
	return (
		<button
			onClick={onclick}
			className="rounded-md px-4 py-2 m-2 ring-1 ring-gray-400 hover:bg-gray-700 hover:text-white "
		>
			{name}
		</button>
	);
};
