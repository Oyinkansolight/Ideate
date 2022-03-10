import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Contact_Us, Design_Two } from "../components/Banners";
import { Card_Five, Card_Two, Flip_Card, TeamCard } from "../components/Cards";
import Layout from "../components/Layout";
import { AboutSliderOne, AboutSliderTwo } from "../components/Sliders";

const About = () => (
	<Layout>
		<div className='flex flex-col'>
			<div>
				<Design_Two />
			</div>

			<div className='w-full'>
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
							<AboutSliderTwo />
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
		</div>

		{/* <div className='mt-[28rem] flex w-full'>
			<div className='mx-auto'>
				<Card_Five />
			</div>
		</div> */}

		<div className='my-16 flex flex-row px-20'>
			<div className='flex w-full'>
				<div className='mx-auto flex flex-row gap-x-6'>
					<div className='bg-chathams my-auto h-px w-20'></div>

					<div className='text-chathams my-auto font-semibold'>
						What We Stand For
					</div>
				</div>
			</div>

			<div className='text-chathams mx-auto mt-4 text-justify font-light'>
				We are on the side of founders. We always act in the best
				interest of the entrepreneur and seek to be empathetic, diligent
				and committed along the way. Most Importantly, our incentives
				are completely aligned with the founders and our co-investors.
			</div>
		</div>

		<div className='grid grid-cols-3'>
			<Flip_Card
				title={"Honesty & fairness"}
				image={
					<StaticImage
						src='../images/tile-1.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
				text={
					"It’s not just the best policy. It’s a core business practice to act in a transparent, trustworthy manner that earns the respect of colleagues, customers, and the public. Treating everyone with the common decency we all deserve and expect."
				}
			/>
			<Flip_Card
				title={"Accountability"}
				image={
					<StaticImage
						src='../images/tile-2.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
				text={
					"Accepting responsibility for your actions (and inactions) is the ultimate way to build trust internally and externally."
				}
			/>
			<Flip_Card
				title={"Diversity and Inclusion"}
				image={
					<StaticImage
						src='../images/tile-3.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
				text={
					"Organizations succeed by bringing different lived experiences and a range of backgrounds into a shared environment where everyone has equal opportunity."
				}
			/>
			<Flip_Card
				title={"Integrity and trust"}
				image={
					<StaticImage
						src='../images/tile-4.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
				text={
					"We keep our world of helping you scale your idea into a worldwide tech phenomenon. Acting with strong ethics is a priority for everyone representing the organization as well as the company’s behavior."
				}
			/>
			<Flip_Card
				title={"Innovation"}
				image={
					<StaticImage
						src='../images/tile-5.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
				text={
					"We are committed to growing your idea with the aid of our quality teamwork and leadership."
				}
			/>
			<Flip_Card
				title={"Dedication"}
				image={
					<StaticImage
						src='../images/tile-6.png'
						alt=''
						className='w-full opacity-70'
					/>
				}
				text={
					"We thrive to always assist our founders in every way possible ensuring that we are on the journey of continuous learning and passionately executing your ideas into the business eco-community. Having joy not just for the work itself but also the people around us, so that everyone can be bold, innovative, and creative."
				}
			/>
		</div>

		<div className='flex w-full py-32'>
			<div className='mx-auto'>
				<Card_Two
					title_one='IdeateZone'
					title_two='Approach'
					description={`We are an early stage investor, with a focus on Pre-Seed and Seed Rounds.
						We enjoy meeting founders who are ambitious, with grit and who are developing market-fit products to unsolved problems in Africa.`}
				/>
			</div>
		</div>

		{/* <div className='w-full'>
			<Contact_Us />
		</div> */}
	</Layout>
);

export default About;
