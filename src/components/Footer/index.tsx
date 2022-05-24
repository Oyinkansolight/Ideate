import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

const Footer = () => (
	<>
		<div className='bg-chathams flex h-[230px] w-full text-white md:h-[106px]'>
			<div className='flex flex-row'>
				<div className='my-auto flex w-full flex-col justify-between gap-y-6 px-10 md:flex-row'>
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

					<div className='my-auto md:hidden'>
						<BasicButton text='Partners Login' type='light' />
					</div>

					<div className='my-auto hidden gap-x-6 md:flex md:flex-row'>
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

				<div className='my-auto md:hidden gap-y-6 flex flex-col'>
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
					</div>
			</div>
		</div>

		<div className='border-chathams flex w-full flex-col md:flex-row gap-x-60 border-b-8 bg-black px-10 py-10'>
			<div className='m-auto'>
				<StaticImage
					src='../../images/ideate.png'
					alt='Ideate Zone'
					className=''
				/>
			</div>

			<div className='my-auto flex flex-row overflow-hidden rounded-md py-6'>
				<div>
					<input
						type='text'
						className='rounded-l-md py-2 px-2 md:w-[600px]'
					/>
				</div>

				<div className='overflow-hidden rounded-r-md'>
					<BasicButton text='Search' />
				</div>
			</div>
		</div>
	</>
);

export default Footer;
