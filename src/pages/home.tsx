import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../components/Buttons";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<div className='-mt-24 h-[650px] w-full'>
				<div className='flex flex-row'>
					<div className='mt-40 flex w-1/2 flex-col gap-y-6 pl-10'>
						<div className='text-left text-6xl font-semibold leading-tight'>
							Pioneering Africa’s Blockchain <br /> Tech Solutions
						</div>

						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Facere praesentium doloribus ducimus
							reprehenderit natus ab sint quos dolorem. Non
							laborum asperiores quibusdam debitis, vero sed sit.
							Vero dolore excepturi sunt.
						</div>

						<div>
							<Link to='/pitch'>
								<BasicButton text='Apply' />
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div
				className='bg-chathams flex h-[650px] justify-end'
				id='blockbg'
			>
				<div className='my-auto flex w-1/3 flex-col gap-y-4 pr-10 text-center text-white'>
					<div className='text-5xl font-medium'>Our Vision</div>
					<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Atque, consequatur facilis, aliquam, earum nihil
						quaerat numquam culpa fugit perspiciatis tempora dolore
						tempore consequuntur iusto dolor at quam suscipit vel
						blanditiis?
					</div>
				</div>
			</div>

			<div
				className='flex h-[650px] flex-row justify-between bg-black'
				id='oculus'
			>
				<div className='my-auto flex w-1/3 flex-col gap-y-4 pl-10 text-white'>
					<div className='text-5xl font-medium'>Our Mission</div>
					<div>
						We will help accelerate blockchain technology adoption
						in Africa by establishing a global investing community
						and a thriving blockchain-based talent pool by
						activating and connecting numerous regional
						institutions.
					</div>
				</div>

				<div>
					<div>
						<StaticImage
							src='../images/business-african-american-man-using-virtual-reality-headset 1.png'
							alt='Oculus User'
						/>
					</div>
				</div>
			</div>

			<div className='flex h-[650px] flex-col gap-y-6 bg-black text-center'>
				<div className='mx-auto flex w-1/3 flex-col gap-y-4 text-white'>
					<div className='text-5xl font-medium'>Be A Part Of It!</div>

					<div className=''>
						Ideate Zone exists to shape the future of marketing,
						advertising and commerce technology, we’ve successfully
						worked with over 60 startups and understand what it
						takes to create global Impact for businesses that move
						people.{" "}
					</div>
				</div>

				<div className='grid grid-flow-col grid-cols-3 px-20'>
					<div className=''>
						<StaticImage
							src='../images/part1.png'
							alt='Part 1'
							className='w-[550px] transition delay-150 duration-500  ease-in-out hover:z-50 hover:w-[700px] hover:translate-x-10'
						/>
					</div>

					<div className=''>
						<StaticImage
							src='../images/part2.png'
							alt='Part 2'
							className='w-[550px] transition delay-150 duration-500  ease-in-out hover:z-50 hover:w-[700px] hover:-translate-x-10'
						/>
					</div>

					<div className=''>
						<StaticImage
							src='../images/part3.png'
							alt='Part 3'
							className='w-[550px] transition delay-150 duration-500  ease-in-out hover:z-50 hover:w-[700px] hover:-translate-x-10'
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}
