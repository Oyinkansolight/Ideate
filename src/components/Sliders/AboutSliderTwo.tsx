import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AboutSliderTwo = () => (
	<div className='grid md:h-[550px] md:grid-cols-2'>
		<div className='flex h-full w-auto flex-col gap-y-4 bg-purple-50 p-10 md:p-20'>
			<div className='flex flex-row gap-x-6'>
				<div className='bg-chathams my-auto h-px w-40'></div>
				<div className='text-chathams text-2xl font-semibold'>
					Featured
				</div>
			</div>

			<div className='w-10 md:ml-44'>
				<div className='h-14 w-14 bg-black'>
					<svg
						className='w-14 p-2'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 60 48'
						fill='none'
					>
						<path
							d='M38.1992 4.49605H26.2142V28.4635L11.9851 0H0V47.9376H59.92L38.1992 4.49605Z'
							fill='white'
						/>
					</svg>
				</div>
			</div>

			<div className='text-justify md:ml-44 md:w-1/2'>
				Mythical Games is a studio creating games and online experiences
				that feature true ownership of digital assets. The creation of a
				secondary digital economy, based on a blockchain, helps to
				verify scarcity, and create a clean record of ownership over
				unique digital items.
			</div>

			<div className='text-justify md:ml-44 md:w-1/2'>
				Over a thousand applications have fully integrated into their
				system since it's inception.
			</div>
		</div>

		<div className='h-full bg-gray-100'>
			<StaticImage
				src='../../images/block.png'
				alt=''
				className='top-[33%] bottom-[33%] m-auto w-auto'
				height={250}
			/>
		</div>
	</div>
);

export default AboutSliderTwo;
