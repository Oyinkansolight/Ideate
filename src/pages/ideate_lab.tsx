import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../components/Buttons";
import Layout from "../components/Layout";

export default function Lab() {
	return (
		<Layout menus={'light'} logo={'light'}>
			<div className='-mt-24 h-[670px] w-full text-white' id='lab_hero'>
				<div className='flex flex-row'>
					<div className='mt-64 flex w-1/2 flex-col gap-y-6 pl-10'>
						<div className='text-left text-6xl leading-tight'>
							Supercharging Startups, <br />
							Accelerating Brands
						</div>

						<div>
							<BasicButton text='Get In Touch' type='light' />
						</div>
					</div>
				</div>
			</div>

			<div className='mt-10 flex flex-col px-10'>
				<div className='text-3xl font-semibold'>Incubate</div>

				<div className='w-1/3'>
					Lorem ipsum dolor sit amet, consectetur adipiscing t, sed do
					eiusmod tempor incididunt ut labore et d olore magna aliqua.
					Ut enim ad minim veniam, quis.
				</div>

				<div className='mx-auto flex w-full flex-row px-40 py-20'>
					<div className='ml-10 flex flex-col gap-y-16'>
						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl font-semibold text-[#108AE7]'>
								Ideation and Concept
							</div>

							<div className='w-2/3'>
								Lorem ipsum dolor sit am consectetur adipiscing
								sed do eiusmod tempor
							</div>
						</div>

						<div className='flex flex-col gap-y-4'>
							<div className='text-chathams text-2xl font-semibold'>
								Product Development
							</div>

							<div className='w-2/3'>
								Lorem ipsum dolor sit am consectetur adipiscing
								sed do eiusmod tempor
							</div>
						</div>
					</div>

					<div>
						<StaticImage
							src='../images/incubate.png'
							alt='incubate_img'
						/>
					</div>

					<div className='ml-32 flex flex-col gap-y-16'>
						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl font-semibold text-[#20A3B5]'>
								Corporate Identity
							</div>

							<div className='w-2/3'>
								Lorem ipsum dolor sit am consectetur adipiscing
								sed do eiusmod tempor
							</div>
						</div>

						<div className='flex flex-col gap-y-4'>
							<div className='text-2xl font-semibold text-[#FB4E72]'>
								Market Launch
							</div>

							<div className='w-2/3'>
								Lorem ipsum dolor sit am consectetur adipiscing
								sed do eiusmod tempor
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-y-10 px-10 py-24 bg-gray-100'>
				<div className='flex flex-col gap-y-4'>
					<div className='text-3xl font-semibold'>Accelerate</div>
					<div className='w-1/3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing t,
						sed do eiusmod tempor incididunt ut labore et d olore
						magna aliqua. Ut enim ad minim veniam, quis
					</div>
				</div>

				<div className='mx-auto flex flex-row gap-x-48'>
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

			<div className='flex h-[900px] flex-col bg-black py-20'>
				<div className='my-auto flex w-1/3 flex-col gap-y-4 pl-10 text-white'>
					<div className='text-5xl font-medium'>
						Investors Network
					</div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing t,
						sed do eiusmod tempor incididunt ut labore et d olore
						magna aliqua. Ut enim ad minim veniam, quis.
					</div>
				</div>

				<div className='mx-auto flex flex-row gap-x-10 px-40 text-center text-white'>
					<div className='flex flex-col gap-y-4 mt-20'>
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

					<div className='flex flex-col gap-y-4'>
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

				<div className='mx-auto -mt-96'>
					<div>
						<StaticImage src='../images/network.png' alt='' />
					</div>
				</div>
			</div>
		</Layout>
	);
}
