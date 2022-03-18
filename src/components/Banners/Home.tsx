import React from "react";
import { BasicButton } from "../Buttons";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Carousel } from "react-responsive-carousel";

const HomeBanner = () => (
	// <div className='flex w-full flex-col justify-between gap-y-6 px-20 py-20 md:h-[500px] md:flex-row md:py-0'>
	// 	<div className='my-auto flex flex-col gap-y-6'>
	// 		<div className='text-chathams flex flex-col gap-y-2 text-center text-3xl capitalize md:text-left md:text-3xl'>
	// 			<div className='font-bold'>Accelerate your startup</div>

	// 			<div className='font-bold'>with Ideate.</div>

	// 			<div className='font-light text-sm'>
	// 				Think Blockchain! Join a network of multidisciplinary
	// 				Founders
	// 			</div>
	// 		</div>

	// 		<div className='mx-auto md:mx-0'>
	// 			<Link to='/pitch'>
	// 				<BasicButton text='Apply' />
	// 			</Link>
	// 		</div>

	// 		<div className='mt-16 hidden flex-row gap-x-36 md:flex'>
	// 			<div className='flex flex-col'>
	// 				<div className='text-chathams text-center text-5xl font-bold'>
	// 					80+
	// 				</div>
	// 				<div className='text-sm font-light'>Startups Funded</div>
	// 			</div>
	// 			<div className='flex flex-col'>
	// 				<div className='text-chathams text-center text-5xl font-bold'>
	// 					10
	// 				</div>
	// 				<div className='text-sm font-light'>
	// 					Years Of Combined Experience
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>

	// 	<div className='mt-6 w-[40rem] md:mt-0 lg:mt-10'>
	// 		<Carousel
	// 			autoPlay
	// 			infiniteLoop
	// 			interval={5000}
	// 			showIndicators={false}
	// 			swipeable
	// 			showArrows={false}
	// 			showStatus={false}
	// 		>
	// 			<div>
	// 				<StaticImage
	// 					src='../../images/ban.jpg'
	// 					alt='Home Banner 1'
	// 					width={600}
	// 				/>
	// 			</div>
	// 			<div>
	// 				<StaticImage
	// 					src='../../images/ban1.jpg'
	// 					alt='Home Banner 2'
	// 					width={600}
	// 				/>
	// 			</div>
	// 			<div>
	// 				<StaticImage
	// 					src='../../images/ban2.jpg'
	// 					alt='Home Banner 3'
	// 					width={600}
	// 				/>
	// 			</div>
	// 			{/* <div>
	// 				<StaticImage
	// 					src='../../images/ban3.jpg'
	// 					alt='Home Banner 4'
	// 					width={600}
	// 				/>
	// 			</div> */}
	// 		</Carousel>
	// 	</div>

	// 	<div className='flex flex-row gap-x-28 md:mt-16 md:hidden md:gap-x-36'>
	// 		<div className='flex flex-col'>
	// 			<div className='text-chathams text-center text-5xl font-bold'>
	// 				80+
	// 			</div>
	// 			<div className='text-sm font-light'>Startups Funded</div>
	// 		</div>
	// 		<div className='flex flex-col'>
	// 			<div className='text-chathams text-center text-5xl font-bold'>
	// 				10
	// 			</div>
	// 			<div className='text-sm font-light'>
	// 				Years Of Combined Experience
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>

	<div className='flex flex-col overflow-hidden'>
		<div>
			{/* <Design_Two /> */}
			<Carousel
				autoPlay
				infiniteLoop
				interval={2000}
				showIndicators={false}
				swipeable
				showArrows={false}
				showStatus={false}
			>
				<div className='relative'>
					<StaticImage
						src='../../images/ban.jpg'
						alt='Home Banner 1'
						// width={800}
						className='w-full'
						height={945}
					/>

					<div className='absolute top-[30%] bottom-[50%] left-[33.33%] right-[33.33%] z-20 text-8xl font-bold text-white'>
						<div className='my-auto flex flex-col gap-y-6'>
							<div className='flex flex-col gap-y-2 text-center text-3xl capitalize text-white md:text-left md:text-3xl'>
								<div className='text-center font-bold'>
									Accelerate your startup
								</div>

								<div className='text-center font-bold -mt-2'>
									with Ideate
								</div>

								<div className='text-center text-xl font-light'>
									Think Blockchain! Join a network of
									multidisciplinary Founders
								</div>
							</div>

							<div className='mx-auto md:mx-0'>
								<Link to='/pitch'>
									<BasicButton text='Apply For Funds' type='light' />
								</Link>
							</div>

							<div className='mx-auto hidden flex-row gap-x-36 md:flex'>
								<div className='flex flex-col'>
									<div className='text-center text-5xl font-bold text-white'>
										80+
									</div>
									<div className='text-sm font-light'>
										Startups Funded
									</div>
								</div>
								<div className='flex flex-col'>
									<div className='text-center text-5xl font-bold text-white'>
										10
									</div>
									<div className='text-sm font-light'>
										Years Of Combined Experience
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-chathams absolute top-0 z-10 h-full w-full opacity-70'></div>
				</div>

				<div className='relative'>
					<StaticImage
						src='../../images/ban1.jpg'
						alt='Home Banner 2'
						// width={800}
						className='w-full'
						height={1000}
					/>

					<div className='absolute top-[30%] bottom-[50%] left-[33.33%] right-[33.33%] z-20 text-8xl font-bold text-white'>
						<div className='my-auto flex flex-col gap-y-6'>
							<div className='flex flex-col gap-y-2 text-center text-3xl capitalize text-white md:text-left md:text-3xl'>
								<div className='text-center font-bold'>
									Access To Multifunctional
								</div>

								<div className='text-center font-bold -mt-2'>
									Angel Investors
								</div>

								<div className='text-center text-xl font-light'>
									A network of crypto enthusiast angels
									commissioned to speed up startups.
								</div>
							</div>

							<div className='mx-auto md:mx-0'>
								<Link to='/pitch'>
									<BasicButton text='Apply For Funds' type='light' />
								</Link>
							</div>

							{/* <div className='mt-8 hidden flex-row gap-x-36 md:flex mx-auto'>
								<div className='flex flex-col'>
									<div className='text-white text-center text-5xl font-bold'>
										80+
									</div>
									<div className='text-sm font-light'>
										Startups Funded
									</div>
								</div>
								<div className='flex flex-col'>
									<div className='text-white text-center text-5xl font-bold'>
										10
									</div>
									<div className='text-sm font-light'>
										Years Of Combined Experience
									</div>
								</div>
							</div> */}
						</div>
					</div>

					<div className='bg-chathams absolute top-0 z-10 h-full w-full opacity-70'></div>
				</div>

				<div className='relative'>
					<StaticImage
						src='../../images/ban2.jpg'
						alt='Home Banner 3'
						// width={800}
						className='w-full'
						height={1000}
					/>

					<div className='absolute top-[30%] bottom-[50%] left-[33.33%] right-[33.33%] z-20 text-8xl font-bold text-white'>
						<div className='my-auto flex flex-col gap-y-6'>
							<div className='flex flex-col gap-y-2 text-center text-3xl capitalize text-white md:text-left md:text-3xl'>
								<div className='text-center font-bold'>
									Providing Resource
								</div>

								<div className='text-center font-bold -mt-2'>
									to Founders
								</div>

								<div className='text-center text-xl font-light'>
									Through venture principal and expertise,
									Ideate Zone is set to groom concepts into
									its full potential.
								</div>
							</div>

							<div className='mx-auto md:mx-0'>
								<Link to='/pitch'>
									<BasicButton text='Apply For Funds' type='light' />
								</Link>
							</div>
						</div>
					</div>

					<div className='bg-chathams absolute top-0 z-10 h-full w-full opacity-70'></div>
				</div>
			</Carousel>
		</div>
	</div>
);

export default HomeBanner;
