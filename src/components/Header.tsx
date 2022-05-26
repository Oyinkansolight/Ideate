import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import BasicButton from "./Buttons/Basic";

interface Props {
	menus?: string;
	logo?: string;
}

const Header = (props: Props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	let menu_theme = "my-auto md:flex flex-row gap-x-16 font-semibold text-black hidden";
	if (props.menus === "light") {
		menu_theme = "my-auto md:flex flex-row gap-x-16 font-semibold text-white hidden";
	}

	return (
		<>
			<div className='h-24 w-full flex-row md:gap-x-96 px-10 flex justify-between md:justify-start'>
				<div className='my-auto drop-shadow-lg'>
					{props.logo !== "light" ? (
						<Link to='/'>
							<StaticImage
								src='../images/ideate.png'
								alt='Text Logo'
								className='drop-shadow-lg'
							/>
						</Link>
					) : (
						<StaticImage
							src='../images/ideate_light.png'
							alt='Text Logo'
							className='drop-shadow-lg'
						/>
					)}
				</div>

				<div className={menu_theme}>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/home'>Home</Link>
					</div>
					{/* <div className='decoration-chathams cursor-pointer underline-offset-[1rem] hover:underline'>
					Startups
				</div> */}
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/partners'>Partners</Link>
					</div>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/ideate_lab'>Ideate Lab</Link>
					</div>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to="/pitch">Application</Link>
					</div>
				</div>

				{/* <div className='my-auto flex flex-row gap-x-6'>
				<Link to='/pitch'>
					<BasicButton text='Submit Pitch Deck' type="light" />
				</Link>
			</div> */}

				<div className='lg:hidden my-auto'>
						<button
							aria-label='Open Menu'
							title='Open Menu'
							className='focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none'
							onClick={() => setIsMenuOpen(true)}
						>
							<svg
								className='w-5 text-gray-600'
								viewBox='0 0 24 24'
							>
								<path
									fill='currentColor'
									d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
								/>
								<path
									fill='currentColor'
									d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
								/>
								<path
									fill='currentColor'
									d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className='absolute top-0 left-0 w-full'>
								<div className='rounded border bg-white p-5 shadow-sm'>
									<div className='mb-4 flex items-center justify-between'>
										<div>
											<StaticImage src="../images/ideate.png" alt="Logo" />
										</div>
										<div>
											<button
												aria-label='Close Menu'
												title='Close Menu'
												className='focus:shadow-outline -mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none'
												onClick={() =>
													setIsMenuOpen(false)
												}
											>
												<svg
													className='w-5 text-gray-600'
													viewBox='0 0 24 24'
												>
													<path
														fill='currentColor'
														d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
									<div className='my-auto flex flex-col gap-y-4 font-semibold text-black'>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/home'>Home</Link>
					</div>
					{/* <div className='decoration-chathams cursor-pointer underline-offset-[1rem] hover:underline'>
					Startups
				</div> */}
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/partners'>Partners</Link>
					</div>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/ideate_lab'>Ideate Lab</Link>
					</div>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to="/pitch">Application</Link>
					</div>
				</div>
									</nav>
								</div>
							</div>
						)}
					</div>
			</div>
		</>
	);
};

export default Header;
