import React from "react";
import { BasicButton } from "../Buttons";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HomeBanner = () => (
	<div className='flex w-full flex-col justify-between gap-y-6 px-20 py-20 md:h-[500px] md:flex-row md:py-0'>
		<div className='my-auto flex flex-col gap-y-6'>
			<div className='text-chathams flex flex-col gap-y-2 text-center text-3xl font-semibold md:text-left md:text-5xl'>
				<div>Think Innovation,</div>
				<div>Create {"&"} Build Startups.</div>

				<div>Ideate.</div>
			</div>

			<div className='mx-auto md:mx-0'>
				<Link to='/pitch'>
					<BasicButton text='Apply For Funding' />
				</Link>
			</div>

			<div className='mt-16 hidden flex-row gap-x-36 md:flex'>
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

		<div className='mt-6 md:mt-0'>
			<StaticImage
				src='../../images/banner1.jpg'
				alt='Home Banner 1'
				width={600}
			/>
		</div>

		<div className='flex flex-row gap-x-28 md:mt-16 md:hidden md:gap-x-36'>
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
