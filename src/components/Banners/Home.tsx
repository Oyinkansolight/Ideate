import React from "react";
import { BasicButton } from "../Buttons";
import { StaticImage } from "gatsby-plugin-image";

const HomeBanner = () => (
	<div className='flex h-[500px] w-full flex-row justify-between px-20'>
		<div className='my-auto flex flex-col gap-y-6'>
			<div className='text-chathams flex flex-col gap-y-2 text-5xl font-semibold'>
				<div>Think!</div>
				<div>Create!!</div>

				<div>Ideate!!!</div>
			</div>

			<div>
				<BasicButton text='Apply For Funding' />
			</div>

			<div className='mt-16 flex flex-row gap-x-36'>
				<div className='flex flex-col'>
					<div className='text-chathams text-center text-3xl font-semibold'>
						80+
					</div>
					<div className='text-sm font-light'>Startups Funded</div>
				</div>
				<div className='flex flex-col'>
					<div className='text-chathams text-center text-3xl font-semibold'>
						10
					</div>
					<div className='text-sm font-light'>
						Years Of Combined Experience
					</div>
				</div>
			</div>
		</div>

		<div>
			<StaticImage src='../../images/banner1.jpg' alt='Home Banner 1' />
		</div>
	</div>
);

export default HomeBanner;
