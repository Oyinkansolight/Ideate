import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Contact_Us, Design_Two } from "../components/Banners";
import { Card_Five, Flip_Card, TeamCard } from "../components/Cards";
import Layout from "../components/Layout";
import { AboutSliderOne } from "../components/Sliders";
import "tw-elements";

const About = () => (
	<Layout>
		<div className='flex'>
			<Design_Two />
		</div>

		<div className='mt-[28rem] flex w-full'>
			<div className='mx-auto'>
				<Card_Five />
			</div>
		</div>

		<div className='mb-10 mt-14 flex flex-col px-20'>
			<div className='flex w-full'>
				<div className='mx-auto flex flex-row gap-x-6'>
					<div className='bg-chathams my-auto h-px w-20'></div>

					<div className='text-chathams my-auto font-semibold'>
						What We Stand For
					</div>
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
			<div
				id='carouselExampleCrossfade'
				className='carousel slide carousel-fade relative'
				data-bs-ride='carousel'
			>
				<div className='carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0'>
					<button
						type='button'
						data-bs-target='#carouselExampleCrossfade'
						data-bs-slide-to='0'
						className='active'
						aria-current='true'
						aria-label='Slide 1'
					></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCrossfade'
						data-bs-slide-to='1'
						aria-label='Slide 2'
					></button>
					{/* <button
						type='button'
						data-bs-target='#carouselExampleCrossfade'
						data-bs-slide-to='2'
						aria-label='Slide 3'
					></button> */}
				</div>
				<div className='carousel-inner relative w-full overflow-hidden'>
					<div className='carousel-item active float-left w-full'>
						<AboutSliderOne />
					</div>
					<div className='carousel-item float-left w-full'>
						<AboutSliderOne />
					</div>
				</div>
				<button
					className='carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none'
					type='button'
					data-bs-target='#carouselExampleCrossfade'
					data-bs-slide='prev'
				>
					<span
						className='carousel-control-prev-icon inline-block bg-no-repeat'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none'
					type='button'
					data-bs-target='#carouselExampleCrossfade'
					data-bs-slide='next'
				>
					<span
						className='carousel-control-next-icon inline-block bg-no-repeat'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	</Layout>
);

export default About;
