import * as React from "react";
import Layout from "../components/Layout";
import { Design_One, HomeBanner } from "../components/Banners";
import {
	Card_Four,
	Card_One,
	Card_Three,
	Card_Two,
	TeamCard,
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

			<div className='-mt-10'>
				<Design_One />
			</div>

			<div className='flex flex-col py-24 px-10 text-center md:flex-row md:px-20'>
				<div className='mx-auto flex md:flex-row md:gap-x-6'>
					<div className='bg-chathams my-auto mr-6  -ml-20 h-px w-20 md:w-28'></div>

					<div className='text-chathams my-auto text-xl font-semibold'>
						Our Vision
					</div>
				</div>

				<div className='text-md mx-auto mt-4 text-justify text-gray-500 md:w-2/4'>
					Our goal is to support the development of blockchain
					technology across Africa by connecting startups with
					investors via principal and expertise.
				</div>
			</div>

			<div className='flex w-full md:px-20'>
				<div className='mx-auto grid grid-cols-1 content-center gap-y-6 md:grid-cols-2 md:gap-x-20 lg:grid-cols-3'>
					<div>
						<Card_One
							logo={
								<StaticImage
									src='../images/Vector.png'
									alt='icon 1'
								/>
							}
							title='Startups'
							description={`We help our Startups grow faster and achieve their business goals by providing strategy, growth hacking, design expertise, funding & networking.`}
						/>
					</div>

					<div>
						<Card_One
							title='Corporates'
							description='We are continuously growing startups, connecting founders, mentors, investors, and corporate partners.'
							logo={
								<StaticImage
									src='../images/Vector-1.png'
									alt='icon 2'
								/>
							}
						/>
					</div>

					<div>
						<Card_One
							title='Investors'
							description='Ideate catalyzes new businesses. Our mentors help build viable and valuable businesses. Our network of top-tier angels gives you access to more than just money.'
							logo={
								<StaticImage
									src='../images/Vector-2.png'
									alt='icon 3'
								/>
							}
						/>
					</div>
				</div>
			</div>

			{/* <div className='flex w-full pb-20'>
				<div className='mx-auto'>
					<Card_Three
						title='Sectors We Engage'
						description='We seek to help founders create an unfair advantage by connecting them to our vast industry network and helping them with market access. We also bring the mobility founder community together on a regular basis to help foster relationships between founders.'
					/>
				</div>
			</div> */}

			{/* TEAM SECTION */}
			<div className='bg-chathams w-full'>
				<div className='mt-24 flex flex-col overflow-hidden px-20'>
					<div className='relative w-full'>
						<div className='bg-chathams absolute col-span-1 h-20 w-px md:h-36'></div>

						<div className='text-white mt-6 text-center text-2xl font-semibold'>
							The Ideate Zone Team
						</div>
					</div>

					<div className='z-20 mx-auto my-10 flex flex-wrap justify-center gap-10 md:w-2/3'>
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
							title='Head of Legal'
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
			</div>

			<div className="mt-20">
				<div className='text-chathams text-center text-3xl font-semibold'>
					Testimonials
				</div>

				<div className='text-center font-light capitalize'>
					What Founders are Saying About Us
				</div>

				<div className='my-6 grid grid-cols-1 place-items-center gap-x-10 px-20 md:grid-cols-3'>
					<div>
						<Testimonial
							text={
								"Choosing IdeateZone was the best decision I made for my startup. In 1 month I was able to convert 50% active users on our platform."
							}
							image={
								<StaticImage
									src='../images/user1.png'
									alt='user 1'
								/>
							}
							name={"Chika Ike"}
							organization={"uli’.Org"}
						/>
					</div>

					<div>
						<Testimonial
							text={
								"Pitching to IdeateZone was the beginning of something new for my company as this helped me with the required aid needed to begin the business."
							}
							image={
								<StaticImage
									src='../images/user2.png'
									alt='user 1'
								/>
							}
							name={"Palmer Smith"}
							organization={"Cerre.ng"}
						/>
					</div>

					<div>
						<Testimonial
							text={
								"IDEATE Zone has helped us to accelerate our bold ambitions and given us a platform to scale our business globally.       "
							}
							image={
								<StaticImage
									src='../images/user3.jpg'
									alt='user 1'
								/>
							}
							name={"RICHMOND OGIGAI"}
							organization={"Devcenter.Africa"}
						/>
					</div>
				</div>
			</div>

			<div className='my-20 mx-auto flex w-full flex-col px-10 md:px-20'>
				<div className='flex flex-row gap-x-6'>
					<div className='bg-chathams my-auto h-px w-[8.5rem]'></div>
					<div className='text-chathams text-md font-semibold leading-tight md:text-xl md:leading-normal'>
						See Our Latest Posts (Coming Soon)
					</div>
				</div>

				{/* <div className='mx-auto my-10 grid grid-cols-1 place-items-center gap-y-10 gap-x-10 md:grid-cols-3'>
					<div>
						<Card_Four
							title={
								"Ideate Zone Invest $100,000 to The Block Tech-Hub"
							}
							author={"IdeateZone"}
							date={"December 4, 2021"}
							image={
								<StaticImage
									src='../images/blockss.jpg'
									alt={undefined}
									// className='bg-contain'
									// width={500}
								/>
							}
						/>
					</div>

					<div>
						<Card_Four
							title={"How Zodak generated $10 Million from NFT"}
							author={"IdeateZone"}
							date={"October 4, 2021"}
							image={
								<StaticImage
									src='../images/card_four_two.png'
									alt={undefined}
								/>
							}
						/>
					</div>

					<div>
						<Card_Four
							title={"HighRev's Solana Integration."}
							author={"IdeateZone"}
							date={"February 4, 2022"}
							image={
								<StaticImage
									src='../images/card_four_three.jpg'
									alt={undefined}
								/>
							}
						/>
					</div>
				</div> */}
			</div>
		</Layout>
	);
};

export default Home;
