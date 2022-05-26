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
					<div className='bg-chathams h-[470px] md:h-[600px] w-full md:w-1/4'></div>

					<div className='mt-48 -ml-10 flex flex-row'>
						<div className=''>
							<StaticImage
								src='../images/partners_bg.png'
								alt='partners_hero'
							/>
						</div>

						<div className='z-50 -ml-16 md:-ml-40 mt-20 md:mt-32 text-3xl md:text-6xl leading-normal transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
							We Partner With <br />
							World <br />
							Leading Corporates <br />
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col px-6 md:px-20'>
				<div className='flex flex-col gap-y-4 text-left'>
					<div className='text-2xl font-semibold text-center md:text-left'>
						Our Expert Team
					</div>
					<div className="md:w-1/5 text-center md:text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor
					</div>
				</div>

				<div className="w-full md:w-2/3 mx-auto mt-4  md:px-10">
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
				className='flex h-[930px] py-6 md:py-0 md:h-[650px] flex-col md:flex-row justify-between bg-black'
				id='oculus'
			>
				<div className='my-auto flex md:w-1/3 flex-col gap-y-4 pl-10 text-white'>
					<div className='text-3xl text-center md:text-left md:text-5xl font-medium'>Co-Founders</div>
					<div>
						We will help accelerate blockchain technology adoption
						in Africa by establishing a global investing community
						and a thriving blockchain-based talent pool by
						activating and connecting numerous regional
						institutions.
					</div>
				</div>

				<div className='flex flex-col md:w-2/4 md:h-full h-[350px] px-6 md:px-0'>
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

			<div className='flex flex-col px-6 md:px-20 my-10'>
				<div className='flex flex-col gap-y-4 text-left'>
					<div className='text-4xl'>
						Portfolio
					</div>
				</div>

				<div className="w-full md:w-2/3 mx-auto mt-4  md:px-10">
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
			
			<div className='flex flex-col px-20 pt-20 pb-0'>
				<div className="text-5xl text-center text-chathams">Investors</div>

				<div className="grid grid-rows-4 md:grid-cols-4 gap-x-6 md:gap-y-0 gap-y-10 my-10 h-[1000px] md:h-[1100px] text-white">
					<div className="mr-10 md:mr-0" id="investor"></div>
					<div className="ml-10 md:ml-0 md:mt-20" id="investor"></div>
					<div className="mr-10 md:mr-0" id="investor"></div>
					<div className="ml-10 md:ml-0 md:mt-20" id="investor"></div>
				</div>
			</div>
		</Layout>
	);
}
