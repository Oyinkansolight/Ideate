import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../Buttons";

const Design_One = () => (
	<div className='relative flex h-[360px] w-full overflow-hidden bg-gray-100 md:h-[600px]'>
		<div className='absolute bottom-0 mx-auto flex w-full flex-col items-center'>
			<div className='mx-auto flex w-4/5 flex-row gap-x-4 md:w-2/5 md:mb-0 mb-4'>
				<div className='bg-chathams -mt-24 h-20 w-1'></div>

				<div className='-mt-24'>
					<p className='text-sm md:text-base text-chathams text-justify capitalize'>
						At Ideate Zone We Partner, Support, Fund, Scale and
						Power Africa's Best Founders and Start-Ups. Our Passion
						Is To See That Early-Stage Start-Ups Achieve Their Bold
						Ambitions.
					</p>
				</div>
			</div>

			<div className=''>
				<Link to='/investor_form'>
					<BasicButton text='Invest Now!' />
				</Link>
			</div>

			<div className='px-10 md:px-0'>
				<StaticImage
					src='../../images/suits.png'
					alt='Design Banner 1'
					className='mx-auto'
				/>
			</div>
		</div>
	</div>
);

export default Design_One;
