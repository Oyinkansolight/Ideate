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
			<div className='flex flex-col overflow-hidden'>
				<div>
					{/* <Design_Two /> */}
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
								// width={800}
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
								// width={800}
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
								// width={800}
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
								// width={800}
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
			</div>

			{/* <div className='mt-[28rem] flex w-full'>
			<div className='mx-auto'>
				<Card_Five />
			</div>
		</div> */}

			<div className='mt-6 mb-16 flex flex-row px-20'>
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
					interest of the entrepreneur and seek to be empathetic,
					diligent and committed along the way. Most Importantly, our
					incentives are completely aligned with the founders and our
					co-investors.
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
						description={`We believe in the power of Blockchain technologies and how it has the potential to reshape Africa's future. We are an early-stage investor interested in meeting founders who are ambitious, with grit, and developing market-fit products to unsolved problems in Africa.`}
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
