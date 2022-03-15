import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

const Design_Two = () => (
	<div className='mx-auto flex h-auto w-full'>
		<div className='relative h-auto w-full'>
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
					<div className='from-chathams-50 mx-auto bg-gradient-to-r via-white to-gray-50 bg-clip-text text-center text-transparent md:w-1/2'>
						{
							"Ideate. Innovate. Transform. Together, we can build bridges to the future."
						}
					</div>

					{/* <div className='mx-auto'>
						<BasicButton text='Get In Touch' type='light' />
					</div> */}
				</div>
			</div>
		</div>
	</div>
);

export default Design_Two;
