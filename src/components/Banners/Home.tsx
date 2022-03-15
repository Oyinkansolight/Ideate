import React from "react";
import { BasicButton } from "../Buttons";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Carousel } from "react-responsive-carousel";

const HomeBanner = () => (
	<div className='flex w-full flex-col justify-between gap-y-6 px-20 py-20 md:h-[500px] md:flex-row md:py-0'>
		<div className='my-auto flex flex-col gap-y-6'>
			<div className='text-chathams flex flex-col gap-y-2 text-center text-3xl font-semibold capitalize md:text-left md:text-3xl'>
				<div>Think Blockchain!</div>
				<div>Join a network of multidisciplinary</div>

				<div>Founders and build your startup with</div>

				<div>Ideate.</div>
			</div>

			<div className='mx-auto md:mx-0'>
				<Link to='/pitch'>
					<BasicButton text='Apply' />
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

		<div className='mt-6 md:mt-0 w-[40rem] lg:mt-10'>
			{/* <StaticImage
				src='../../images/banner1.jpg'
				alt='Home Banner 1'
				width={600}
			/> */}
			<Carousel autoPlay infiniteLoop interval={2000} showIndicators={false} swipeable showArrows={false} showStatus={false}>
				<div>
					<StaticImage
						src='../../images/ban.jpg'
						alt='Home Banner 1'
						width={600}
					/>
				</div>
				<div>
					<StaticImage
						src='../../images/ban1.jpg'
						alt='Home Banner 2'
						width={600}
					/>
				</div>
				<div>
					<StaticImage
						src='../../images/ban2.jpg'
						alt='Home Banner 3'
						width={600}
					/>
				</div>
				{/* <div>
					<StaticImage
						src='../../images/ban3.jpg'
						alt='Home Banner 4'
						width={600}
					/>
				</div> */}
			</Carousel>
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
