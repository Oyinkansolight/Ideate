import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AboutSliderOne = () => (
	<div className='grid h-[550px] grid-cols-2'>
		<div className='flex h-full flex-col bg-[#DBE9F4] p-20 gap-y-10'>
			<div className='flex flex-row gap-x-6'>
				<div className='bg-chathams my-auto h-px w-40'></div>
				<div className="font-semibold text-2xl text-chathams">Featured Startup</div>
			</div>

			<div className=" ml-44">Logo</div>

			<div className="w-1/2 text-justify ml-44">
				Uli’ is a startup that promotes healthy lifestyle for women, an
				AI powered tool for women who spit during pregnancy. Women can
				spit into the bottle, with the help of AI, the bottle retains a
				fresh fragrance.
			</div>

			<div className="w-1/2 text-justify ml-44">
				Since its inception in 2018, Uli’ has raised a total of $51
				million as a result of our strategic customer acquisition tools.
			</div>
		</div>

		<div className='h-full bg-gray-100'>
            <StaticImage src="../../images/bottle.png" alt="" className="" />
        </div>
	</div>
);

export default AboutSliderOne;