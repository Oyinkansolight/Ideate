import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../components/Buttons";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<div className='-mt-24 h-[1000px] md:h-[650px] w-full'>
				<div className='flex flex-col md:flex-row justify-between'>
					<div className='mt-40 flex md:w-1/2 flex-col gap-y-6 px-10 md:pl-10 md:pr-0'>
						<div className='text-center md:text-left text-4xl md:text-6xl font-semibold leading-tight'>
							Pioneering Africa’s Blockchain <br /> Tech Solutions
						</div>

						<div className="text-center md:text-left">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Facere praesentium doloribus ducimus
							reprehenderit natus ab sint quos dolorem. Non
							laborum asperiores quibusdam debitis, vero sed sit.
							Vero dolore excepturi sunt.
						</div>

						<div className="mx-auto md:mx-0">
							<Link to='/pitch'>
								<BasicButton text='Apply' />
							</Link>
						</div>
					</div>

					<div className="hidden md:block -mr-40 -mt-40 z-[-10]">
						<StaticImage src="../images/ideate_home.svg" alt={""} width={850} />
					</div>

					<div className="mx-auto md:hidden">
						<StaticImage src="../images/ideate_home.svg" alt={""} width={850} />
					</div>
				</div>
			</div>

			<div
				className='bg-chathams flex h-[480px] md:h-[650px] justify-end'
				id='blockbg'
			>
				<div className='my-auto flex md:w-1/3 flex-col gap-y-4 px-10 md:pl-0 md:pr-10 text-center text-white'>
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
				className='flex h-[750px] md:h-[650px] flex-col overflow-hidden md:flex-row justify-between bg-black'
				id='oculus'
			>
				<div className='my-auto mt-40 px-10 flex md:w-2/3 flex-col gap-y-4 pl-10 text-white'>
					<div className='text-3xl text-center md:text-left md:text-5xl font-medium'>Our Mission</div>
					<div className="text-center md:text-left">
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
				<div className='mx-auto flex p-10 md:p-0 md:w-1/3 flex-col gap-y-4 text-white'>
					<div className='text-3xl md:text-5xl font-medium'>Be A Part Of It!</div>

					<div className=''>
						Ideate Zone exists to shape the future of marketing,
						advertising and commerce technology, we’ve successfully
						worked with over 60 startups and understand what it
						takes to create global Impact for businesses that move
						people.{" "}
					</div>
				</div>

				<div className='grid grid-flow-col grid-cols-3 px-10 overflow-x-hidden md:px-20 mx-auto'>
					<div className=''>
						<StaticImage
							src='../images/part1.png'
							alt='Part 1'
							className='md:w-[550px] transition delay-150 duration-500  ease-in-out hover:z-50 md:hover:w-[700px] hover:translate-x-10'
						/>
					</div>

					<div className=''>
						<StaticImage
							src='../images/part2.png'
							alt='Part 2'
							className='md:w-[550px] transition delay-150 duration-500  ease-in-out hover:z-50 hover:md:w-[700px] hover:-translate-x-10'
						/>
					</div>

					<div className=''>
						<StaticImage
							src='../images/part3.png'
							alt='Part 3'
							className='md:w-[550px] transition delay-150 duration-500  ease-in-out hover:z-50 hover:md:w-[700px] hover:-translate-x-10'
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}
