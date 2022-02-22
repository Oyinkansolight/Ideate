import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

const Card_Five = () => (
	<div className='flex flex-row gap-x-20'>
		<div className='my-auto flex flex-col gap-y-2'>
			<div className='text-justify font-semibold text-2xl text-chathams'>Get To Know Our Investors</div>

			<div className='mt-4'>
				<BasicButton text={"Meet Investors"} />
			</div>
		</div>

		<div>
			<StaticImage src='../../images/investors.jpg' alt={"Card Image 5"} width={550} />
		</div>
	</div>
);

export default Card_Five;
