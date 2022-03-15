import React from "react";

interface Props {
	title: string;
	name: string;
	image: any;
}

const TeamCard = (props: Props) => (
	<div className='flex flex-col'>
		<div className='mb-6 w-auto h-auto border-4 border-chathams rounded-full overflow-hidden'>{props.image}</div>

		<div className="text-chathams font-semibold text-center md:text-left">{props.name}</div>

		<div className="text-center md:text-left">{props.title}</div>
	</div>
);

export default TeamCard;
