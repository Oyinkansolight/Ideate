import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

const Footer = () => (
	<>
		<div className='bg-chathams flex w-full text-white md:h-[106px]'>
			<div className='my-auto flex w-full flex-row justify-between px-10'>
				<div className='my-auto flex flex-row gap-x-14'>
					<Link
						className='my-auto'
						to='https://twitter.com/ideate_zone'
					>
						<div>
							<StaticImage
								src='../../images/twitter.svg'
								alt='Twitter'
								height={20}
							/>
						</div>
					</Link>

					<Link
						className='my-auto'
						to='https://www.linkedin.com/in/ideatezone/'
					>
						<div>
							<StaticImage
								src='../../images/linkedin.svg'
								alt='LinkedIn'
								height={20}
							/>
						</div>
					</Link>

					<Link
						className='my-auto'
						to='https://instagram.com/ideate_zone'
					>
						<div>
							<StaticImage
								src='../../images/insta.svg'
								alt='Instagram'
								height={20}
							/>
						</div>
					</Link>
				</div>

				<div className='my-auto flex flex-row gap-x-6'>
					<Link className='my-auto' to='/about'>
						About Us
					</Link>

					<Link className='my-auto' to='/partners'>
						Partners
					</Link>

					<Link className='my-auto' to='/ideateLab'>
						IdeateLab
					</Link>

					<Link className='my-auto' to='/blog'>
						Blog
					</Link>

					<div className='my-auto'>
						<BasicButton text='Partners Login' type='light' />
					</div>
				</div>
			</div>
		</div>

		<div className='flex w-full flex-row bg-black gap-x-60 px-10 py-10 border-b-8 border-chathams'>
			<div className="my-auto">
				<StaticImage
					src='../../images/ideate.png'
					alt='Ideate Zone'
					className=''
				/>
			</div>

			<div className='my-auto flex flex-row overflow-hidden rounded-md py-6'>
				<div>
					<input type='text' className='rounded-l-md py-2 px-2 w-[600px]' />
				</div>

				<div className="overflow-hidden rounded-r-md">
					<BasicButton text='Search' />
				</div>
			</div>
		</div>
	</>
);

export default Footer;
