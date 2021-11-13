export const ResultInfo = result => {
	console.log(result);
	return (
		<div>
			<div className="grid grid-cols-6 gap-4 font-bold">
				<div>Reg. No</div>
				<div>ID No</div>
				<div>Attendence</div>
				<div>Assignment</div>
				<div>Midterm</div>
				<div>Final</div>
			</div>
			{result.infos.map(({ results }) => {
				return (
					<div>
						{results.map(({ reg, id, attendence, assignment, mid, final }) => {
							return (
								<div className="grid grid-cols-6 gap-4">
									<div>{reg}</div>
									<div>{id} </div>
									<div>{attendence}</div>
									<div>{assignment}</div>
									<div>{mid} </div>
									<div>{final}</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};
