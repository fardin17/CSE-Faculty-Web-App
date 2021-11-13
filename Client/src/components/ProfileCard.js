const TeacherCard = ({ src, name, designation }) => {
	return (
		<div class="w-full rounded-xl bg-gray-200 flex flex-col shadow-lg">
			<img class="w-auto rounded-t-xl" src={src} alt="avatar" />
			<div class="text-center flex flex-col p-2">
				<span class="text-base font-bold">{name}</span>
				<span class="text-sm italic">{designation}</span>
			</div>
		</div>
	);
};
export default TeacherCard;
