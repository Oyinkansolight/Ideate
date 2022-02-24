import React from "react";
import { BasicButton } from "../Buttons";
import { StaticImage } from "gatsby-plugin-image";

const HomeBanner = () => (
	<div className='flex md:h-[500px] w-full flex-col md:flex-row gap-y-6 justify-between px-20 py-20 md:py-0'>
		<div className='my-auto flex flex-col gap-y-6'>
			<div className='text-chathams flex flex-col gap-y-2 text-center text-3xl md:text-5xl font-semibold md:text-left'>
				<div>Think Innovation,</div>
				<div>Create {"&"} Build Startups.</div>

				<div>Ideate.</div>
			</div>

			<div className="mx-auto md:mx-0">
				<BasicButton text='Apply For Funding' />
			</div>

			<div className='hidden mt-16 md:flex flex-row gap-x-36'>
				<div className='flex flex-col'>
					<div className='text-chathams text-center text-5xl font-semibold'>
						80+
					</div>
					<div className='text-sm font-light'>Startups Funded</div>
				</div>
				<div className='flex flex-col'>
					<div className='text-chathams text-center text-5xl font-semibold'>
						10
					</div>
					<div className='text-sm font-light'>
						Years Of Combined Experience
					</div>
				</div>
			</div>
		</div>

		<div className='md:mt-0 mt-6'>
			<StaticImage
				src='../../images/banner1.jpg'
				alt='Home Banner 1'
				width={600}
			/>
		</div>

		<div className='md:hidden md:mt-16 flex flex-row md:gap-x-36 gap-x-28'>
				<div className='flex flex-col'>
					<div className='text-chathams text-center text-5xl font-semibold'>
						80+
					</div>
					<div className='text-sm font-light'>Startups Funded</div>
				</div>
				<div className='flex flex-col'>
					<div className='text-chathams text-center text-5xl font-semibold'>
						10
					</div>
					<div className='text-sm font-light'>
						Years Of Combined Experience
					</div>
				</div>
			</div>
	</div>
);

export default HomeBanner;
