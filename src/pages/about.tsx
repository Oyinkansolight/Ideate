import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Contact_Us, Design_Two } from "../components/Banners";
import { Card_Five, Card_Two, Flip_Card, TeamCard } from "../components/Cards";
import Layout from "../components/Layout";
import { AboutSliderOne, AboutSliderTwo } from "../components/Sliders";
import { Carousel } from "react-responsive-carousel";

const About = () => {
	return (
		<Layout>
			<div className='-mt-24 w-full' id='lagos'>
				<div className='absolute top-[35%] bottom-[50%] left-[20%] right-[20%] z-20 text-8xl font-bold text-white'>
					<div className='my-auto flex flex-col gap-y-6'>
						<div className='flex flex-col gap-y-2 text-center text-3xl capitalize text-white md:text-left md:text-5xl'>
							<div className='text-center font-bold'>
								We’re the World’s Leading Startup Accelerator
								and Venture Studio
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='flex flex-col overflow-hidden'>
				<div>

					<Carousel
						autoPlay
						infiniteLoop
						interval={2000}
						showIndicators={false}
						swipeable
						showArrows={false}
						showStatus={false}
					>
						<div className='relative'>
							<StaticImage
								src='../images/about.jpg'
								alt='About Banner 1'
								className='w-full'
								height={945}
							/>

							<div className='absolute top-[40%] bottom-[50%] left-[33.33%] right-[33.33%] z-20 text-8xl font-semibold text-white'>
								Ideate
							</div>

							<div className='bg-chathams absolute top-0 z-10 h-full w-full opacity-60'></div>
						</div>

						<div className='relative'>
							<StaticImage
								src='../images/about_2.jpg'
								alt='About Banner 2'

								className='w-full'
								height={1000}
							/>

							<div className='absolute top-[40%] bottom-[50%] left-[33.33%] right-[33.33%] z-20 text-8xl font-semibold text-white'>
							Innovate
							</div>

							<div className='bg-chathams absolute top-0 z-10 h-full w-full opacity-60'></div>
						</div>

						<div className='relative'>
							<StaticImage
								src='../images/about_3.jpg'
								alt='About Banner 3'
								
								className='w-full'
								height={1000}
							/>

							<div className='absolute top-[40%] bottom-[50%] left-[33.33%] right-[33.33%] z-20 text-8xl font-semibold text-white'>
								Transform
							</div>

							<div className='bg-chathams absolute top-0 z-10 h-full w-full opacity-60'></div>
						</div>

						<div className='relative'>
							<StaticImage
								src='../images/about_4.jpg'
								alt='About Banner 4'
								
								className='w-full'
								height={1000}
							/>

							<div className='absolute capitalize top-[40%] bottom-[50%] left-[20%] right-[20%]  z-20 text-6xl font-semibold text-white'>
							Together, We Can Build Bridges To The Future...
							</div>

							<div className='bg-chathams absolute top-0 z-10 h-full w-full opacity-60'></div>
						</div>
					</Carousel>
				</div>

				<div className='w-full -mt-10'>
					<Carousel
						autoPlay
						infiniteLoop
						interval={3000}
						showArrows
						swipeable
						showStatus={false}
					>
						<div>
							<AboutSliderOne />
						</div>

						<div>
							<AboutSliderTwo />
						</div>
					</Carousel>
				</div>
			</div> */}

			{/* <div className='mt-[28rem] flex w-full'>
			<div className='mx-auto'>
				<Card_Five />
			</div>
		</div> */}

			<div className='mt-6 mb-16 flex flex-row px-20'>
				<div className='flex w-full'>
					<div className='flex flex-row gap-x-6'>
						<div className='bg-chathams my-auto h-[2px] w-[151px]'></div>

						<div className='text-chathams my-auto text-xl font-semibold'>
							Featured Project
						</div>
					</div>
				</div>

				{/* <div className='text-chathams mx-auto mt-4 text-justify font-light'>
					We are on the side of founders. We always act in the best
					interest of the entrepreneur and seek to be empathetic,
					diligent and committed along the way. Most Importantly, our
					incentives are completely aligned with the founders and our
					co-investors.
				</div> */}
			</div>

			<div className='relative -mt-20 h-[600px] px-20'>
				<div className=' z-50 ml-40 -mt-16 p-20' id='featured'>
					<div className='text-md absolute mt-32 w-1/5 text-[#262E37]'>
						Uli’ is a startup that promotes healthy lifestyle for
						women, an AI powered tool for women who spit during
						pregnancy. Women can spit into the bottle, with the help
						of AI, the bottle retains a fresh fragrance.
						<br />
						<br />
						Since its inception in 2018, Uli’ has raised a total of
						$51 million as a result of our strategic customer
						acquisition tools.
					</div>
				</div>

				<div
					className=' absolute bottom-0 right-0 -z-50 mt-20 pt-10'
					id='featured_design'
				></div>
			</div>

			<div className='mt-6 mb-16 flex flex-row px-20'>
				<div className='flex w-full'>
					<div className='mx-auto flex flex-row gap-x-6'>
						<div className='bg-chathams my-auto h-[2px] w-[151px]'></div>

						<div className='text-chathams my-auto text-xl font-semibold'>
							Why Choose Us
						</div>
					</div>
				</div>

				<div className='text-chathams mx-auto mt-4 text-justify font-light'>
					IdeateZone combines real search, social and display data
					with your prospective sales information to create an
					accurate analytics and reliable digital marketing forecast
					for use in sales conversion.
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
						description={`We understand the frustration of coming up short. That’s why we settle for nothing less than above and beyound for your business growth. our strategic tools can help optimize your digital space to get the best results.`}
					/>
				</div>
			</div>

			{/* <div className='w-full'>
			<Contact_Us />
		</div> */}
		</Layout>
	);
};

export default About;
