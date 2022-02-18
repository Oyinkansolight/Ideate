import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

interface Props {
	title: string;
	description: string;
}

const Card_Three = (props: Props) => (
	<div className='flex flex-row gap-x-24'>
		<div>
			<StaticImage
				src='../../images/card_three.png'
				alt={"Card Image 3"}
			/>
		</div>

		<div className='my-auto flex flex-col gap-y-6 w-[450px]'>
			<div className='text-chathams text-2xl font-semibold'>
				{props.title}
			</div>

			<div className='text-justify'>{props.description}</div>

			<div className='mt-4'>
				<BasicButton text={"Get Started"} />
			</div>
		</div>
	</div>
);

export default Card_Three;
