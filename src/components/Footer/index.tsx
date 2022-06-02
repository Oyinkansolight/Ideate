import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

const Footer = () => (
	<>
		<div className='bg-chathams flex h-[380px] w-full text-white md:h-[106px]'>
			<div className='flex flex-row w-full'>
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
						<Link className='my-auto' to='/'>
							Terms of use
						</Link>

						<Link className='my-auto' to='/'>
							Privacy Policy
						</Link>

						<Link className='my-auto' to='/'>
							SFDR Policy
						</Link>

						<Link className='my-auto' to='/'>
							Contact
						</Link>

						<Link className='my-auto' to='/partners'>
							Partners
						</Link>

						<Link className='my-auto' to='/'>
							Blog
						</Link>

						<div className='my-auto'>
							<BasicButton text='Partners Login' type='light' />
						</div>
					</div>
				</div>

				<div className='my-auto md:hidden gap-y-6 flex flex-col'>
					<Link className='my-auto' to='/'>
						Terms of use
					</Link>

					<Link className='my-auto' to='/'>
						Privacy Policy
					</Link>

					<Link className='my-auto' to='/'>
						SFDR Policy
					</Link>

					<Link className='my-auto' to='/'>
						Contact
					</Link>

					<Link className='my-auto' to='/partners'>
						Partners
					</Link>

					<Link className='my-auto' to='/'>
						Blog
					</Link>
				</div>
			</div>



		</div>

		<div className='border-chathams flex w-full flex-col md:flex-row gap-x-40 border-b-8 bg-black px-10 py-10'>
			{/* <div className='my-auto'>
				<StaticImage
					src='../../images/ideate.png'
					alt='Ideate Zone'
					className=''
				/>
			</div> */}

			<div className='my-auto flex flex-col md:flex-row overflow-hidden rounded-md py-6 mx-auto gap-y-6 text-center'>
				<div className="text-white font-medium mr-2 my-auto text-xs">Keep up with us:</div>
				
				<div className='flex flex-row'>
				<div>
					<input
						type='text'
						placeholder="email address"
						className='rounded-l-md p-2 lg:w-[600px] h-[55px] lg:h-auto bg-black border border-white text-white'
					/>
				</div>

				<div className='bg-chathams my-auto flex p-2 text-white rounded-r-md h-[55px] lg:py-3 md:h-auto text-xs border border-chathams'>
					{/* <BasicButton text='Sign Up For Latest Update' /> */}
					<div className="my-auto">Sign up for latest updates</div>
				</div>
				</div>
			</div>
		</div>
	</>
);

export default Footer;
