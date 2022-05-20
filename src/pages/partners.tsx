import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BasicButton } from "../components/Buttons";
import { StaffCard } from "../components/Cards";
import Layout from "../components/Layout";

export default function Partners() {
	return (
		<Layout logo={'light'}>
			<div className='-mt-24 h-[650px] w-full'>
				<div className='flex flex-row'>
					<div className='bg-chathams h-[600px] w-1/4'></div>

					<div className='mt-48 -ml-10 flex flex-row'>
						<div className=''>
							<StaticImage
								src='../images/partners_bg.png'
								alt='partners_hero'
							/>
						</div>

						<div className='z-50 -ml-40 mt-32 text-6xl leading-normal transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
							We Partner With <br />
							World <br />
							Leading Corporates <br />
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col px-20'>
				<div className='flex flex-col gap-y-4 text-left'>
					<div className='text-2xl font-semibold'>
						Our Expert Team
					</div>
					<div className="w-1/5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor
					</div>
				</div>

				<div className="w-2/3 mx-auto mt-4">
					<Carousel
						autoPlay
						infiniteLoop
						interval={2000}
						swipeable
						showStatus={false}
					>
                        <div>
                            <StaffCard />
                        </div>

                        <div>
                            <StaffCard />
                        </div>

                        <div>
                            <StaffCard />
                        </div>
                    </Carousel>
				</div>
			</div>

			<div
				className='flex h-[650px] flex-row justify-between bg-black'
				id='oculus'
			>
				<div className='my-auto flex w-1/3 flex-col gap-y-4 pl-10 text-white'>
					<div className='text-5xl font-medium'>Co-Founders</div>
					<div>
						We will help accelerate blockchain technology adoption
						in Africa by establishing a global investing community
						and a thriving blockchain-based talent pool by
						activating and connecting numerous regional
						institutions.
					</div>
				</div>

				<div className='flex flex-col w-2/4 h-full'>
                    <div className="grid grid-cols-2 w-full h-full">
                        <div className="bg-[#1E94ED] w-full h-full"></div>
                        <div className="bg-[#104176] w-full h-full"></div>
                    </div>
                    <div className="grid grid-cols-2 w-full h-full">
						<div className="bg-[#464646] w-full h-full"></div>
						<div className="bg-[#23B5C8] w-[95%] rounded-tr-[50%] h-full"></div>
					</div>
                </div>
			</div>

			<div className='flex flex-col px-20 my-10'>
				<div className='flex flex-col gap-y-4 text-left'>
					<div className='text-4xl'>
						Portfolio
					</div>
				</div>

				<div className="w-2/3 mx-auto mt-4">
					<Carousel
						autoPlay
						infiniteLoop
						interval={2000}
						swipeable
						showStatus={false}
					>
                        <div>
                            <StaffCard />
                        </div>

                        <div>
                            <StaffCard />
                        </div>

                        <div>
                            <StaffCard />
                        </div>
                    </Carousel>
				</div>
			</div>
			
			<div className='flex flex-col px-20 py-20'>
				<div className="text-5xl text-center text-chathams">Investors</div>

				<div className="grid grid-cols-4 gap-x-6 my-10 h-[300px] text-white">
					<div className="" id="investor"></div>
					<div className="mt-20" id="investor"></div>
					<div className="" id="investor"></div>
					<div className="mt-20" id="investor"></div>
				</div>
			</div>
		</Layout>
	);
}
