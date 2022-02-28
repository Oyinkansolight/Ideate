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
					We are proud of some of the portfolio companies we have
					funded, mentored and accelerated both local and global
					across sectors doing amazing things.
				</div>

				<div className='mt-10 flex flex-row justify-center gap-x-10'>
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
					
				</div>
			</div>

			<div className='my-20 grid w-full grid-cols-4 place-items-center gap-y-8 gap-x-1 px-20'>
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
			</div>

			<div className='mt-40'>
				<div className=' mx-auto flex w-full px-20'>
					<div className='flex flex-row gap-x-24'>
						<div>
							<StaticImage
								src='../images/port_found.png'
								alt={"Card Image 3"}
							/>
						</div>

						<div className='my-auto flex w-[450px] flex-col gap-y-6'>
							<div className='text-chathams text-2xl font-semibold'>
								We power founders to go Further, Faster.
							</div>

							<div className='text-justify'>
								We help clients develop a digital strategy so
								they know what they need to do and why they need
								to do it.
							</div>

							<div className='mt-4'>
								<BasicButton text={"Apply Now"} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='my-40 w-full'>
				<Contact_Us />
			</div>

			<div className='mb-40 flex w-full flex-col'>
				<div className='text-chathams mx-auto text-4xl capitalize'>
					Frequently asked questions
				</div>

				<div className='mx-auto flex w-full justify-center'>
					<Faq />
				</div>
			</div>
		</Layout>
	);
};

export default Portfolio;
