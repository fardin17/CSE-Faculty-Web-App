import ReactModal from './../ReactModal';
export const DefaultAdd = ({ name, title, icon, body }) => {
	return (
		<div className=" border-b border-t md:text-3xl text-xl py-4 md:py-2 flex justify-between">
			<div>{name}</div>
			<div>
				<ReactModal icon={icon} title={title} body={body} />
			</div>
		</div>
	);
};
