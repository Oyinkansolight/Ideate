import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
	image?: any;
	title?: string;
	description?: string;
}

export default function Card_Six(props: Props) {
	return (
		<div className='relative flex h-[464px] w-[406px] flex-col justify-between rounded-md bg-[#15487F] p-10'>
			<div className="absolute right-0">{props.image}</div>

			<div className='mt-60 text-white'>
				<div className="font-bold text-xl">{props.title}</div>

				<div className="mt-4">{props.description}</div>
			</div>
		</div>
	);
}
