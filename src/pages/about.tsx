import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Contact_Us, Design_Two } from "../components/Banners";
import { Card_Five, Flip_Card, TeamCard } from "../components/Cards";
import Layout from "../components/Layout";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	DotGroup,
	ButtonFirst,
	ButtonLast,
	Dot,
} from "pure-react-carousel";
import { AboutSliderOne } from "../components/Sliders";

const About = () => (
	<Layout>
		<Design_Two />

		<div className='my-24 flex w-full'>
			<div className='mx-auto'>
				<Card_Five />
			</div>
		</div>

		<div className='mb-10 flex flex-col justify-between px-20'>
			<div className='flex flex-row gap-10'>
				<div className='bg-chathams my-auto h-px w-36'></div>

				<div className='text-chathams my-auto ml-[32rem] font-semibold'>
					What We Stand For
				</div>
			</div>

			<div className='text-chathams mx-auto mt-4 w-1/2 text-center font-light'>
				We are on the side of founders. We always act in the best
				interest of the entrepreneur and seek to be empathetic, diligent
				and committed along the way. Most Importantly, our incentives
				are completely aligned with the founders and our co-investors.
			</div>
		</div>

		<div className='grid grid-cols-3'>
			<Flip_Card
				title={"Startups"}
				image={
					<StaticImage
						src='../images/tile-1.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
			/>
			<Flip_Card
				title={"Teamwork"}
				image={
					<StaticImage
						src='../images/tile-2.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
			/>
			<Flip_Card
				title={"Conversions"}
				image={
					<StaticImage
						src='../images/tile-3.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
			/>
			<Flip_Card
				title={"Investors"}
				image={
					<StaticImage
						src='../images/tile-4.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
			/>
			<Flip_Card
				title={"Transparency"}
				image={
					<StaticImage
						src='../images/tile-5.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
			/>
			<Flip_Card
				title={"Returns & RIO"}
				image={
					<StaticImage
						src='../images/tile-6.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
			/>
		</div>

		<div className='mt-24 mb-10 flex flex-col px-20'>
			<div className='relative w-full'>
				<div className='bg-chathams absolute col-span-1 h-36 w-px'></div>

				<div className='text-chathams text-center text-2xl font-semibold'>
					The Ideate Zone Team
				</div>
			</div>

			<div className='mx-auto my-20 flex w-2/3 flex-wrap justify-center gap-10'>
				<TeamCard
					name='Patrick Oke'
					title='Founder'
					image={
						<StaticImage
							src='../images/user_1.png'
							alt={undefined}
						/>
					}
				/>

				<TeamCard
					name='Ella Odun'
					title='Managing Partner'
					image={
						<StaticImage
							src='../images/user_2.png'
							alt={undefined}
						/>
					}
				/>

				<TeamCard
					name='John McClean'
					title='Investor'
					image={
						<StaticImage
							src='../images/user_3.png'
							alt={undefined}
						/>
					}
				/>

				<TeamCard
					name='Jennifer Mitch'
					title='Head Of Legal'
					image={
						<StaticImage
							src='../images/user_4.png'
							alt={undefined}
						/>
					}
				/>

				<TeamCard
					name='Milka Fred'
					title='Chief Financial Officer'
					image={
						<StaticImage
							src='../images/user_5.png'
							alt={undefined}
						/>
					}
				/>
			</div>
		</div>

		<div className='w-full'>
			<Contact_Us />
		</div>

		<div className='my-24 w-full'>
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={35}
				totalSlides={2}
			>
				<Slider>
					<Slide index={0}>
						<AboutSliderOne />
					</Slide>
					<Slide index={1}>
						<AboutSliderOne />
					</Slide>
				</Slider>

				{/* <ButtonFirst>First</ButtonFirst>
				<ButtonLast>Last</ButtonLast> */}

{/* 
				<Dot slide={0} />
				<Dot slide={1} /> */}
				{/* <DotGroup /> */}

				{/* <ButtonBack>Back</ButtonBack>
				<ButtonNext>Next</ButtonNext> */}
			</CarouselProvider>
		</div>
	</Layout>
);

export default About;
