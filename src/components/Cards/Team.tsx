import React from "react";

interface Props {
	title: string;
	name: string;
	image: any;
}

const TeamCard = (props: Props) => (
	<div className='flex flex-col'>
		<div className='mb-6'>{props.image}</div>

		<div className="text-chathams font-semibold">{props.name}</div>

		<div>{props.title}</div>
	</div>
);

export default TeamCard;
