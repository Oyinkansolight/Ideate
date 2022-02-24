import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

interface Props {
	title: string;
	description: string;
}

const Card_Three = (props: Props) => (
	<div className='flex md:flex-row flex-col px-20 md:px-0 gap-x-24'>
		<div>
			<StaticImage
				src='../../images/card_three.png'
				alt={"Card Image 3"}
			/>
		</div>

		<div className='my-auto flex flex-col gap-y-6 md:w-[450px]'>
			<div className='text-chathams text-2xl font-semibold mt-4 md:mt-0'>
				{props.title}
			</div>

			<div className='md:text-justify'>{props.description}</div>

			<div className='mt-4 mx-auto md:mx-0'>
				<BasicButton text={"Get Started"} />
			</div>
		</div>
	</div>
);

export default Card_Three;
