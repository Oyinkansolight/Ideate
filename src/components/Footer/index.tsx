import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Footer = () => (
	<div className='grid h-[400px] w-full grid-cols-4'>
		<div className='flex h-full flex-col place-content-center gap-y-6 bg-gray-300 px-20'>
			<div>
				<StaticImage src='../../images/logo.png' width={60} alt='Text Logo' />
			</div>

			<div className='text-chathams font-light'>
				We offer you one of the best digital marketing and advertising
				tools for startups in nigeria. we represent quality and
				efficiency
			</div>

			<div className='flex flex-row gap-x-6'>
				<div>Follow Us</div>

				<Link to='https://twitter.com/ideate_zone'>
					<div>
						<StaticImage src='../../images/fb.png' alt='Facebook' />
					</div>
				</Link>

				<Link to='https://instagram.com/ideate_zone'>
					<div>
						<StaticImage
							src='../../images/insta.png'
							alt='Instagram'
						/>
					</div>
				</Link>

				<Link to='https://www.linkedin.com/in/ideatezone/'>
					<div>
						<StaticImage
							src='../../images/linked.png'
							alt='LinkedIn'
						/>
					</div>
				</Link>
			</div>
		</div>

		<div className='bg-chathams col-span-3 h-full px-20 py-20 text-gray-200'>
			<div className='flex flex-row justify-between gap-x-20'>
				<div className='flex flex-col'>
					<div className='text-2xl font-semibold'>Our Services</div>

					<ul className='mt-4 leading-10'>
						<li>Marketing Strategy</li>
						<li>Social marketing</li>
						<li>Consultation</li>
						<li>Product design</li>
						<li>Brand awareness</li>
						<li>Forecasting tools</li>
					</ul>
				</div>

				<div className='flex w-1/2 flex-col gap-y-6'>
					<div className='text-2xl font-semibold'>
						Company Address
					</div>

					<div className='w-3/4 text-justify font-light'>
						Ideate Zone is a leading venture capitalist firm helping
						founders and startups accelerate their dream through
						providing funding, mentorship and corporate
						partnerships.
					</div>

					<div className='flex flex-row gap-x-2'>
						<div className='font-semibold'>Address:</div>

						<div className='capitalize'>
							6 Fomella street, Wuse 2, Abuja
						</div>
					</div>

					<div className='flex flex-row gap-x-2'>
						<div className='font-semibold'>Phone:</div>

						<div className='capitalize'>+234 (0) 805 760156</div>
					</div>

					<div className='flex flex-row gap-x-2'>
						<div className='font-semibold'>Email:</div>

						<div className='capitalize'>contact@ide8.zone</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
