import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

const Footer = () => (
	<div className='bg-chathams flex h-[300px] w-full'>
		<div className='m-auto grid grid-cols-3 gap-x-6 text-white'>
			<div className='flex flex-col gap-y-4 mt-2'>
				<div className='text-2xl font-semibold'>IdeateZone</div>
				<div className='text-sm font-light'>THINK/CREATE/INNOVATE</div>
				<div className='flex flex-row gap-x-6'>
					<Link to='https://twitter.com/ideate_zone'>
						<div>
							<StaticImage
								src='../../images/facebook.svg'
								alt='Facebook'
							/>
						</div>
					</Link>

					<Link to='https://instagram.com/ideate_zone'>
						<div>
							<StaticImage
								src='../../images/insta.svg'
								alt='Instagram'
							/>
						</div>
					</Link>

					<Link to='https://instagram.com/ideate_zone'>
						<div>
							<StaticImage
								src='../../images/email.svg'
								alt='Instagram'
							/>
						</div>
					</Link>

					<Link to='https://www.linkedin.com/in/ideatezone/'>
						<div>
							<StaticImage
								src='../../images/linkedin.svg'
								alt='LinkedIn'
							/>
						</div>
					</Link>
				</div>
			</div>

			<div className='font-light'>
				<ul className='leading-10'>
					<li>{"Terms & Conditions"}</li>
					<li>Legal Notice</li>
					<li>Privacy</li>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
				</ul>
			</div>

			<div className='flex flex-col gap-y-4 '>
				<div className='flex flex-row gap-x-2'>
					<div className='font-semibold'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
					</div>

					<div className='capitalize'>
						6 Fomella street, Wuse 2, Abuja
					</div>
				</div>

				<div className='flex flex-row gap-x-2'>
					<div className='font-semibold'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
							/>
						</svg>
					</div>

					<div className='capitalize'>+234 (0) 805 760156</div>
				</div>

				<div className='flex flex-row gap-x-2'>
					<div className='font-semibold'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
							/>
						</svg>
					</div>

					<div className='capitalize'>contact@ide8.zone</div>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
