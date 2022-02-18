import * as React from "react";
import Layout from "../components/Layout";
import { Design_One, HomeBanner } from "../components/Banners";
import {
	Card_Four,
	Card_One,
	Card_Three,
	Card_Two,
	Testimonial,
} from "../components/Cards";
import { StaticImage } from "gatsby-plugin-image";
// import Card_One_Svg from "../images/svg/card_one_one.svg";

// markup
const Home = () => {
	return (
		<Layout>
			<div className='mt-6'>
				<HomeBanner />
			</div>

			<div>
				<Design_One />
			</div>

			<div className='flex flex-row py-24 px-20'>
				<div className='bg-chathams my-auto mr-6 ml-10 h-px w-28'></div>

				<div className='text-chathams my-auto w-2/3 text-xl font-semibold'>
					Benefits You Get When Using Our Services
				</div>

				<div className='text-md mr-28 w-2/4 text-justify text-gray-500'>
					Our ultimate goal is to exceed the demand and expectations
					of our clients. We offer result proven solutions for all the
					challenges faced by startups. We’ve over 200 success stories
					and reviews From our clients. Become a part of our success
					story today!
				</div>
			</div>

			<div className='flex w-full'>
				<div className='mx-auto grid grid-cols-3 gap-x-20'>
					<div>
						<Card_One
							// logo={<Card_One_Svg />}
							title='Brand Awareness'
							description="Making Brands memorable and recognizable to it's target audience by providing context around the market that you operate."
							logo={undefined}
						/>
					</div>

					<div>
						<Card_One
							title='Accelerate To Market Fit'
							description='Explore our different types of digital marketing tools that connect brands with potential customers.'
							logo={undefined}
						/>
					</div>

					<div>
						<Card_One
							title='Product Strategy'
							description='We define what you want to achieve, and guide large teams of work that will help you achieve your goals.'
							logo={undefined}
						/>
					</div>
				</div>
			</div>

			<div className='flex w-full py-32'>
				<div className='mx-auto'>
					<Card_Two
						title_one='IdeateZone'
						title_two='Approach'
						description={`We understand the frustration of coming up short. ${"That’s"} why we settle for nothing less than above and beyond for your business growth. our strategic tools can help optimize your digital space to get the best results.`}
					/>
				</div>
			</div>

			<div className='flex w-full pb-20'>
				<div className='mx-auto'>
					<Card_Three
						title='Engaging New Audience'
						description='The key to building brand awareness is creating content and experiences that engage new audiences. IdeateZone combines real search, social and sales information to reach audience.'
					/>
				</div>
			</div>

			<div>
				<div className='text-chathams text-center text-3xl font-semibold'>
					Testimonials
				</div>

				<div className='text-center font-light capitalize'>
					Success stories from Clients
				</div>

				<div className='my-6 grid grid-cols-3 gap-x-10 px-20'>
					<div>
						<Testimonial
							text={
								"Choosing IdeateZone was the best decision i made for my startup. in 1 month i was able to convert 50% active users on our platform."
							}
							image={undefined}
							name={"Chika Ike"}
							organization={"uli’.Org"}
						/>
					</div>

					<div>
						<Testimonial
							text={
								"Choosing IdeateZone was the best decision i made for my startup. in 1 month i was able to convert 50% active users on our platform."
							}
							image={undefined}
							name={"Palmer Smith"}
							organization={"Cerre.ng"}
						/>
					</div>

					<div>
						<Testimonial
							text={
								"Choosing IdeateZone was the best decision i made for my startup. in 1 month i was able to convert 50% active users on our platform."
							}
							image={undefined}
							name={"hULT RILAY"}
							organization={"Game squad"}
						/>
					</div>
				</div>
			</div>

			<div className='flex flex-col w-full px-20 my-20'>
				<div className='flex flex-row gap-x-6'>
					<div className='bg-chathams h-px w-40 my-auto'></div>
					<div className='text-chathams text-xl font-semibold'>
						See Our Latest Posts
					</div>
				</div>

				<div className="my-10 grid grid-cols-2 place-items-center">
					<div>
						<Card_Four title={"How Zodak generated $10 Million from NFT"} author={"IdeateZone"} date={"December 4, 2021"} image={
								<StaticImage src="../images/card_four_one.png" alt={undefined} />
						} />
					</div>

					<div>
						<Card_Four title={"How Zodak generated $10 Million from NFT"} author={"IdeateZone"} date={"December 4, 2021"} image={
							<StaticImage src="../images/card_four_two.png" alt={undefined} />
						} />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
