import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Contact_Us, PortfolioBanner } from "../components/Banners";
import { BasicButton } from "../components/Buttons";
import Faq from "../components/Faq";
import Layout from "../components/Layout";

const Portfolio = () => {
	const [portfolio, setPortfolio] = useState(0);

	const handlePortfolio = (number) => {
		setPortfolio(number);
	};

	return (
		<Layout>
			<div className='mx-auto flex w-full px-20'>
				<PortfolioBanner />
			</div>

			<div className='relative my-16 flex w-full flex-col gap-y-6 text-center'>
				<div className='bg-chathams absolute left-0 h-32 w-px'></div>

				<div className='text-chathams text-4xl'>
					Our Portfolio Companies
				</div>

				<div className='mx-auto w-1/3 font-light text-gray-500'>
					We are a network of blockchain experts, ICO experts,
					founders and investors. Helping startups worldwide
					to accelerate business success in a completely new economy.
				</div>

				<div className='mx-auto mt-6 px-20'>
					<div className='relative w-full bg-gray-100 px-10'>
						<div className='absolute left-0 z-0 mt-36 h-[10rem] w-[22rem] bg-gray-200 lg:mt-60'></div>

						<div className='flex flex-row gap-x-10'>
							<div className='my-auto ml-24 flex flex-col'>
								<div className='text-left text-3xl font-semibold'>
									Ascon
								</div>
								<div className='text-left'>
									Digital Solution
								</div>

								<div className='z-10 mt-4 w-4/5 text-justify leading-6'>
									Ascon is a startup that promotes healthy
									lifestyle for women, an AI powered tool for
									women who spit during pregnancy. Women can
									spit into the bottle, with the help of AI,
									the bottle retains a fresh fragrance. Since
									its inception in 2018, Uli’ has raised a
									total of $51 million as a result of our
									strategic customer .
								</div>
							</div>

							<div className='pb-6'>
								<StaticImage
									src='../images/ascon.png'
									alt={""}
									width={1000}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='mx-auto mt-20 px-20'>
					<div className='relative w-full bg-gray-100 px-10'>
						<div className='absolute right-0 z-0 mt-36 h-[10rem] w-[22rem] bg-gray-200 lg:mt-60'></div>

						<div className='flex flex-row-reverse gap-x-10'>
							<div className='my-auto ml-24 flex flex-col'>
								<div className='text-left text-3xl font-semibold'>
									Ascon
								</div>
								<div className='text-left'>
									Digital Solution
								</div>

								<div className='z-10 mt-4 w-4/5 text-justify leading-6'>
									Ascon is a startup that promotes healthy
									lifestyle for women, an AI powered tool for
									women who spit during pregnancy. Women can
									spit into the bottle, with the help of AI,
									the bottle retains a fresh fragrance. Since
									its inception in 2018, Uli’ has raised a
									total of $51 million as a result of our
									strategic customer .
								</div>
							</div>

							<div className='pb-6'>
								<StaticImage
									src='../images/ascon2.png'
									alt={""}
									width={1000}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* <div className='mt-10 flex flex-row justify-center gap-x-10'>
					<div>
						<BasicButton
							onPress={() => handlePortfolio(0)}
							text='All Portfolio'
							type={portfolio === 0 ? "" : "light"}
						/>
					</div>

					<div>
						<BasicButton
							onPress={() => handlePortfolio(1)}
							text='Fintech'
							type={portfolio === 1 ? "" : "light"}
						/>
					</div>

					<div>
						<BasicButton
							onPress={() => handlePortfolio(2)}
							text='Healthcare'
							type={portfolio === 2 ? "" : "light"}
						/>
					</div>

					<div>
						<BasicButton
							onPress={() => handlePortfolio(3)}
							text='Logistics'
							type={portfolio === 3 ? "" : "light"}
						/>
					</div>

					<div>
						<BasicButton
							onPress={() => handlePortfolio(4)}
							text='SAAS/Enterprise'
							type={portfolio === 4 ? "" : "light"}
						/>
					</div>

					<div>
						<BasicButton
							onPress={() => handlePortfolio(5)}
							text='Digital Marketing'
							type={portfolio === 5 ? "" : "light"}
						/>
					</div>

					<div>
						<BasicButton
							onPress={() => handlePortfolio(6)}
							text='Agrotech'
							type={portfolio === 6 ? "" : "light"}
						/>
					</div>
					
				</div> */}
			</div>

			{/* <div className='my-20 grid w-full grid-cols-4 place-items-center gap-y-8 gap-x-1 px-20'>
				{portfolio === 0 && (
					<>
						<div>
							<StaticImage
								src='../images/port_1.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_2.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_3.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_4.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_5.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_6.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_7.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_8.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>
					</>
				)}

				{portfolio === 1 && (
					<>
						<div>
							<StaticImage
								src='../images/port_3.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_4.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_5.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_6.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_7.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_8.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>
					</>
				)}

				{portfolio === 2 && (
					<>
						<div>
							<StaticImage
								src='../images/port_1.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_2.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_6.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_7.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_8.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>
					</>
				)}

				{portfolio === 3 && (
					<>
						<div>
							<StaticImage
								src='../images/port_1.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_2.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_3.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_4.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>
					</>
				)}

				{portfolio === 4 && (
					<>
						<div>
							<StaticImage
								src='../images/port_1.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_2.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_3.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_5.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_6.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_7.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>

						<div>
							<StaticImage
								src='../images/port_8.png'
								alt=''
								className='opacity-50 hover:opacity-100'
								width={350}
							/>
						</div>
					</>
				)}
			</div> */}

			<div className='my-40'>
				<div className=' mx-auto flex w-full px-20'>
					<div className='mx-auto flex flex-row gap-x-24'>
						<div>
							<StaticImage
								src='../images/ascon_bottom.png'
								alt={"Card Image 3"}
							/>
						</div>

						<div className='my-auto flex w-[450px] flex-col gap-y-6'>
							<div className='text-chathams text-2xl font-semibold'>
								We power founders to go Further, Faster.
							</div>

							<div className='text-justify'>
								Welcome to Ideate, the venture capital ecosystem
								positioned to help you gain the right exposure
								for your concept.
							</div>

							<div className='mt-4'>
								<Link to='/pitch'>
									<BasicButton text={"Pitch Us"} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Portfolio;
