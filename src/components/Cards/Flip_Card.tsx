import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface Props {
	title: string;
	description?: string;
	image: any;
	text?: string;
}

const Flip_Card = (props: Props) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	console.log("Image Count", props.image);

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
			{/* Front */}
			<div
				className='h-80 overflow-hidden bg-yellow-100'
				onMouseMove={handleClick}
			>
				<div className='relative flex'>
					<div className='absolute z-0'>{props.image}</div>

					<div className='bg-chathams absolute z-10 h-80 w-full opacity-70'></div>

					<div className='h-80 w-full flex flex-col justify-around'>
						<div className='z-20 text-2xl mx-auto font-semibold capitalize text-white'>
							<div className=''>{props.title}</div>
						</div>
					</div>
				</div>
			</div>

			{/* Back */}
			<div
				className='bg-chathams flex h-80 flex-col justify-around text-white'
				onMouseLeave={handleClick}
			>
				<div className='px-10 text-lg font-semibold'>{props.text}</div>
			</div>
		</ReactCardFlip>
	);
};

export default Flip_Card;
