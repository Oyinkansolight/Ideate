import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

const Design_Two = () => (
	<div className='mx-auto flex h-[400px] w-full'>
		<div className='relative h-[400px] w-full'>
			<div className='md:hidden'>
				<StaticImage
					src='../../images/banner_2.png'
					alt='About Banner'
					className='w-full'
					height={400}
					width={400}
				/>
			</div>

			<div className='hidden md:block'>
				<StaticImage
					src='../../images/banner_2.png'
					alt='About Banner'
					className='w-full'
					// height={700}
					// width={700}
				/>
			</div>

			<div>
				<div className='absolute -my-[18rem] flex w-full flex-col gap-y-4 text-3xl font-bold text-white md:-my-[30rem] md:text-5xl'>
					<div className='mx-auto text-center from-chathams-50 bg-gradient-to-r via-white to-gray-50 bg-clip-text text-transparent md:w-1/2'>
						{
							"We’re Africa’s Leading Startup Accelerator and Venture Platform"
						}
					</div>

					<div className="mx-auto">
						<BasicButton text='Get In Touch' type='light' />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Design_Two;
