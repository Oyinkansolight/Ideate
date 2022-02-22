import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface Props {
	title: string;
	description?: string;
	image: any;
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
				<div className="relative flex">
					<div className="z-0 absolute">{props.image}</div>

                    <div className="absolute z-10 bg-chathams h-80 w-full opacity-70"></div>

					<div className='text-white absolute text-2xl z-20 mt-36 mx-48 font-semibold'>
						{props.title}
					</div>
				</div>
			</div>

			{/* Back */}
			<div
				className='h-80 bg-chathams'
				onMouseLeave={handleClick}
			></div>
		</ReactCardFlip>
	);
};

export default Flip_Card;
