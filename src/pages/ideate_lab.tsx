import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../components/Buttons";
import Layout from "../components/Layout";

export default function Lab() {
	return (
		<Layout menus={'light'} logo={'light'}>
			<div className='-mt-24 h-[670px] w-full text-white' id='lab_hero'>
				<div className='flex flex-row'>
					<div className='mt-64 flex md:w-1/2 flex-col gap-y-6 md:pl-10 px-10'>
						<div className='text-center md:text-left text-3xl md:text-6xl leading-tight'>
							Supercharging Startups, <br />
							Accelerating Brands
						</div>

						<div className="mx-auto md:mx-0">
							<BasicButton text='Get In Touch' type='light' />
						</div>
					</div>
				</div>
			</div>

			<div className='mt-10 flex flex-col px-10 text-center md:text-left'>
				<div className='text-3xl font-semibold'>Incubate</div>

				<div className='md:w-1/3'>
					Lorem ipsum dolor sit amet, consectetur adipiscing t, sed do
					eiusmod tempor incididunt ut labore et d olore magna aliqua.
					Ut enim ad minim veniam, quis.
				</div>

				<div className='mx-auto flex w-full flex-col md:flex-row md:px-40 py-20'>
					<div className="md:hidden">
						<StaticImage
							src='../images/incubate.png'
							alt='incubate_img'
						/>
					</div>

					<div className='md:ml-10 flex flex-col gap-y-10 md:gap-y-16 mb-10 md:mb-0'>
						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl font-semibold text-[#108AE7]'>
								Conceptualization
							</div>

							<div className='md:w-2/3'>
								Lorem ipsum dolor sit am consectetur adipiscing
								sed do eiusmod tempor
							</div>
						</div>

						<div className='flex flex-col gap-y-4'>
							<div className='text-chathams text-2xl font-semibold'>
								Product Development
							</div>

							<div className='md:w-2/3'>
								Lorem ipsum dolor sit am consectetur adipiscing
								sed do eiusmod tempor
							</div>
						</div>
					</div>

					<div className="hidden md:block">
						<StaticImage
							src='../images/incubate.png'
							alt='incubate_img'
						/>
					</div>

					<div className='md:ml-32 flex flex-col gap-y-10 md:gap-y-16 mb-10 md:mb-0'>
						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl font-semibold text-[#20A3B5]'>
								Corporate Identity
							</div>

							<div className='md:w-2/3'>
								Lorem ipsum dolor sit am consectetur adipiscing
								sed do eiusmod tempor
							</div>
						</div>

						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl font-semibold text-[#FB4E72]'>
								Market Launch
							</div>

							<div className='md:w-2/3'>
								Lorem ipsum dolor sit am consectetur adipiscing
								sed do eiusmod tempor
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-y-10 px-10 py-24 bg-gray-100'>
				<div className='flex flex-col gap-y-4 text-center md:text-left'>
					<div className='text-3xl font-semibold'>Accelerate</div>
					<div className='md:w-1/3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing t,
						sed do eiusmod tempor incididunt ut labore et d olore
						magna aliqua. Ut enim ad minim veniam, quis
					</div>
				</div>

				<div className='mx-auto flex flex-col md:flex-row gap-x-48 gap-y-10'>
					<div className=''>
						<StaticImage
							src='../images/accelerate_text1.svg'
							alt='accelerate_img'
							width={600}
						/>
						{/* <div>
							Personalized guidance from serial founders and
							investors
						</div> */}
					</div>

					<div className=''>
						<StaticImage
							src='../images/accelerate_text.svg'
							alt='accelerate_img'
							width={600}
						/>
						{/* <div>
							Collaboration and partnership with pother startups
						</div> */}
					</div>
				</div>
			</div>

			<div className='flex h-[1500px] md:h-[1000px] flex-col bg-black py-6 md:py-20 overflow-hidden'>
				<div className='my-auto flex md:w-1/3 flex-col gap-y-4 px-6 md:px-0 md:pl-10 text-white text-center md:text-left'>
					<div className='text-2xl md:text-5xl font-medium'>
						Investors Network
					</div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing t,
						sed do eiusmod tempor incididunt ut labore et d olore
						magna aliqua. Ut enim ad minim veniam, quis.
					</div>
				</div>

				<div className='mx-auto flex flex-col md:flex-row lg:gap-x-10 gap-y-14 mt-10 md:mt-4 mb-4 lg:mb-0 lg:px-40 text-center text-white'>
					<div className='flex flex-col gap-y-4 md:mt-20 md:pt-10'>
						<div>
							<StaticImage
								src='../images/invest_1.png'
								alt=''
								height={120}
							/>
						</div>

						<div className='text-xl font-semibold'>
							Private partners
						</div>

						<div className='-mt-4 px-28'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Mattis nulla lacus.
						</div>
					</div>

					<div className='flex flex-col gap-y-4 md:pt-10'>
						<div>
							<StaticImage
								src='../images/invest_2.png'
								alt=''
								height={120}
							/>
						</div>

						<div className='text-xl font-semibold'>
							Angel Investors
						</div>

						<div className='-mt-4 px-28'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Mattis nulla lacus.
						</div>
					</div>

					<div className='flex flex-col gap-y-4'>
						<div>
							<StaticImage
								src='../images/invest_3.png'
								alt=''
								height={120}
							/>
						</div>

						<div className='text-xl font-semibold'>
							Venture capital
						</div>

						<div className='-mt-4 px-28'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Mattis nulla lacus.
						</div>
					</div>
				</div>

				<div className='mx-auto px-10 lg:px-0 md:-mt-80 lg:-mt-96'>
					<div>
						<StaticImage src='../images/network.png' alt='' />
					</div>
				</div>
			</div>
		</Layout>
	);
}
