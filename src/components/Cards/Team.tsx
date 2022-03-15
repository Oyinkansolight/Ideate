import React from "react";

interface Props {
	title: string;
	name: string;
	image: any;
}

const TeamCard = (props: Props) => (
	<div className='flex flex-col shadow-lg px-6 py-4 rounded-md bg-gray-100'>
		<div className='mb-6 w-auto h-auto rounded-l-full overflow-hidden shadow-lg border-2 border-gray-100'>{props.image}</div>

		<div className="text-chathams font-semibold text-center">{props.name}</div>

		<div className="text-center">{props.title}</div>
	</div>
);

export default TeamCard;
