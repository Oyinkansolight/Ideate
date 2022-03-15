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
					With expertise in blockchain and ICO, Ideate Zone
					facilitates startups worldwide to speed up business success
					in a completely new economy.
				</div>

				<div className='mx-auto mt-6 w-[70%] px-20'>
					<div className='relative w-full bg-gray-100 px-10 py-10'>
						{/* <div className='absolute left-0 z-0 mt-36 h-[10rem] w-[22rem] bg-gray-200 lg:mt-60'></div> */}

						<div className='flex flex-row gap-x-10'>
							<div className='my-auto ml-24 flex flex-col'>
								<div className='text-left text-3xl font-semibold'>
									Blockdaemon
								</div>
								{/* <div className='text-left'>
									Digital Solution
								</div> */}

								<div className='z-10 mt-4 w-4/5 text-justify leading-6'>
									Blockdaemon is the leading independent
									blockchain node infrastructure to stake,
									scale, and deploy nodes with
									institutional-grade security and monitoring.
								</div>
							</div>

							<div className='mt-10 pb-6'>
								<svg
									width='162px'
									height='35px'
									viewBox='0 0 162 35'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									xmlnsXlink='http://www.w3.org/1999/xlink'
								>
									<g
										stroke='none'
										stroke-width='1'
										fill='none'
										fill-rule='evenodd'
									>
										<g
											className='logo-fills'
											fill='#211B4E'
											fill-rule='nonzero'
										>
											<g>
												<path d='M144.237979,12.1273714 C146.653768,12.1273714 148.880274,13.918 148.880274,16.4697143 C148.880274,19.2004571 146.931726,21.1253714 144.237979,21.1253714 C141.543663,21.1253714 139.595684,19.2004571 139.595684,16.4697143 C139.595684,13.918 141.822189,12.1273714 144.237979,12.1273714 Z M61.0654737,12.1273714 C63.4812632,12.1273714 65.7077684,13.918 65.7077684,16.4697143 C65.7077684,19.2004571 63.7597895,21.1253714 61.0654737,21.1253714 C58.3717263,21.1253714 56.4233495,19.2004571 56.4233495,16.4697143 C56.4233495,13.918 58.6496842,12.1273714 61.0654737,12.1273714 Z M74.0686737,12.1833143 C74.7701053,12.1833143 75.4158316,12.34 76.0615579,12.6085714 L76.0615579,12.6085714 L76.0615579,15.2386286 C75.6159158,14.6342857 74.8923158,14.3097143 74.1465474,14.3097143 C72.8107579,14.3097143 71.9086737,15.3393714 71.9086737,16.6487429 C71.9086737,17.9805714 72.8215579,18.9430286 74.1800842,18.9430286 C74.8923158,18.9430286 75.6051158,18.5961143 76.0615579,18.0477143 L76.0615579,18.0477143 L76.0615579,20.6777143 C75.3379579,20.9015429 74.8144421,21.0694286 74.1351789,21.0694286 C72.9665053,21.0694286 71.8529684,20.6217714 70.9849895,19.8271429 C70.0607368,18.9877714 69.6378316,17.8910286 69.6378316,16.6375429 C69.6378316,15.4848571 70.0721053,14.3768571 70.8735789,13.5486857 C71.6972211,12.6981143 72.8886316,12.1833143 74.0686737,12.1833143 Z M155.414842,12.4071429 L159.411411,17.5664571 L159.434147,17.5664571 L159.434147,12.4071429 L161.615747,12.4071429 L161.615747,20.8456 L159.434147,20.8456 L155.437011,15.6750857 L155.414842,15.6750857 L155.414842,20.8456 L153.233242,20.8456 L153.233242,12.4071429 L155.414842,12.4071429 Z M128.808189,12.4071429 L130.511179,16.9173714 L132.314779,12.4071429 L134.485579,12.4071429 L135.754863,20.8456 L133.572695,20.8456 L132.960505,15.9884571 L132.938337,15.9884571 L130.923284,20.8456 L130.054737,20.8456 L128.128926,15.9884571 L128.106758,15.9884571 L127.405326,20.8456 L125.234526,20.8456 L126.659558,12.4071429 L128.808189,12.4071429 Z M121.048674,12.4071429 L121.048674,14.2649714 L118.4544,14.2649714 L118.4544,15.6750857 L120.915095,15.6750857 L120.915095,17.5329143 L118.4544,17.5329143 L118.4544,18.9877714 L121.048674,18.9877714 L121.048674,20.8456 L116.2728,20.8456 L116.2728,12.4071429 L121.048674,12.4071429 Z M109.091937,12.4071429 L112.253495,20.8456 L109.926947,20.8456 L109.381263,19.3794857 L106.375453,19.3794857 L105.7968,20.8456 L103.481053,20.8456 L106.709684,12.4071429 L109.091937,12.4071429 Z M95.6214947,12.4071429 C97.9594105,12.4071429 99.8852211,14.2537714 99.8852211,16.6264 C99.8852211,18.9989714 97.9480421,20.8456 95.6214947,20.8456 L95.6214947,20.8456 L92.5264421,20.8456 L92.5264421,12.4071429 Z M82.9303579,12.4071429 L82.9303579,15.8877143 L82.9525263,15.8877143 L85.5911368,12.4071429 L88.2962526,12.4071429 L84.9562105,16.4025714 L88.5969474,20.8456 L85.7690526,20.8456 L82.9525263,17.1859429 L82.9303579,17.1859429 L82.9303579,20.8456 L80.7481895,20.8456 L80.7481895,12.4071429 L82.9303579,12.4071429 Z M50.17788,12.4071429 L50.17788,18.9877714 L52.7940947,18.9877714 L52.7940947,20.8456 L47.9958821,20.8456 L47.9958821,12.4071429 L50.17788,12.4071429 Z M40.2364232,12.4071429 C41.7281874,12.4071429 42.7301432,12.9890857 42.7301432,14.6006857 C42.7301432,15.3617143 42.4852105,15.9772571 41.8061179,16.3242286 L41.8061179,16.3242286 L41.8061179,16.3465714 C43.0084421,16.5032571 43.5205326,17.3202286 43.5205326,18.4953714 C43.5205326,20.2636571 42.0176274,20.8456 40.4813558,20.8456 L40.4813558,20.8456 L37.1192589,20.8456 L37.1192589,12.4071429 Z M41.3163095,18.2715429 C41.3163095,17.2530857 40.2364232,17.3538286 39.5239074,17.3538286 L39.5239074,17.3538286 L39.3012568,17.3538286 L39.3012568,19.1668571 L39.7851378,19.166869 C40.4325773,19.163952 41.3163095,19.1075657 41.3163095,18.2715429 Z M144.237979,14.2537714 C142.935158,14.2537714 141.866526,15.3169714 141.866526,16.4808571 C141.866526,17.9357714 142.935158,18.9989714 144.237979,18.9989714 C145.540232,18.9989714 146.608863,17.9357714 146.608863,16.4808571 C146.608863,15.3169714 145.540232,14.2537714 144.237979,14.2537714 Z M61.0654737,14.2537714 C59.7632211,14.2537714 58.6945895,15.3169714 58.6945895,16.4808571 C58.6945895,17.9357714 59.7632211,18.9989714 61.0654737,18.9989714 C62.3682947,18.9989714 63.4369263,17.9357714 63.4369263,16.4808571 C63.4369263,15.3169714 62.3682947,14.2537714 61.0654737,14.2537714 Z M95.2207579,14.2649714 L94.7086105,14.2649714 L94.7086105,18.9877714 L95.1985895,18.9877714 C96.5008421,18.9877714 97.6143789,18.2715429 97.6143789,16.6264 C97.6143789,15.1154857 96.6236211,14.2649714 95.2207579,14.2649714 L95.2207579,14.2649714 Z M107.900526,15.0148 L107.878358,15.0148 L106.976842,17.7007429 L108.791242,17.7007429 L107.900526,15.0148 Z M39.4571179,14.0858857 L39.3012568,14.0858857 L39.3012568,15.7198286 L39.5461895,15.7198286 C40.1250695,15.7198286 40.7262316,15.6191429 40.7262316,14.9028571 C40.7262316,14.1306286 40.0471389,14.0858857 39.4571179,14.0858857 L39.4571179,14.0858857 Z'></path>
												<g transform='translate(0.000000, 0.571429)'>
													<path d='M8.71891894,7.095223 L12.7170502,4.77468108 L16.8172262,7.15443401 L25.4284466,0.146841102 L25.4284466,12.1524394 L25.4284466,26.907956 L12.7170502,34.2857143 L0.00565390086,26.907956 L0.00565390086,14.332431 L-1.92212745e-15,14.3357972 L-1.92212745e-15,0 L8.71891894,7.095223 Z M2.22813097,15.5505886 L2.22813097,25.6180057 L12.7170502,31.7058138 L23.2059695,25.6180057 L23.2059695,15.7076385 L12.7067305,21.9148619 L2.22813097,15.5505886 Z M2.65091101,13.1970475 L12.7220454,19.3138264 L22.9271169,13.2805388 L12.7170502,7.35458158 L2.65091101,13.1970475 Z M19.1077696,8.16499436 L23.2059695,10.5817197 L23.2059695,4.82997413 C21.8399212,5.94162914 20.473818,7.05328416 19.1077696,8.16499436 Z M2.22247707,10.4348786 L6.32067692,8.01809808 L2.22247707,4.68313302 C2.22247707,6.60034475 2.22247707,8.51761167 2.22247707,10.4348786 Z'></path>
												</g>
											</g>
										</g>
									</g>
								</svg>
								{/* <StaticImage
									src='../images/ascon.png'
									alt={""}
									width={1000}
								/> */}
							</div>
						</div>
					</div>
				</div>

				<div className='mx-auto mt-10 w-[70%] px-20'>
					<div className='relative w-full bg-gray-100 px-10 py-10'>
						{/* <div className='absolute right-0 z-0 mt-36 h-[10rem] w-[22rem] bg-gray-200 lg:mt-60'></div> */}

						<div className='flex gap-x-10'>
							<div className='my-auto ml-24 flex flex-col'>
								<div className='text-left text-3xl font-semibold'>
									Mythical Games
								</div>
								{/* <div className='text-left'>
									Digital Solution
								</div> */}

								<div className='z-10 mt-4 w-4/5 text-justify leading-6'>
									Mythical Games is a studio creating games
									and online experiences that feature true
									ownership of digital assets. The creation of
									a secondary digital economy, based on a
									blockchain, helps to verify scarcity, and
									create a clean record of ownership over
									unique digital items.
								</div>
							</div>

							<div className='mt-10 pb-6 bg-black h-20'>
								<svg
									className="w-24 p-4"
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 60 48'
									fill='none'
								>
									<path
										d='M38.1992 4.49605H26.2142V28.4635L11.9851 0H0V47.9376H59.92L38.1992 4.49605Z'
										fill='white'
									/>
								</svg>

								{/* <StaticImage
									src='../images/myth.svg'
									alt={""}
									width={300}
									className="shadow-lg"
								/> */}
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
