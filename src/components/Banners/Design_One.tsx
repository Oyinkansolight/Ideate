import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Design_One = () => (
	<div className='relative flex h-[360px] md:h-[600px] w-full overflow-hidden bg-gray-100'>
		<div className='items-center absolute bottom-0 mx-auto flex w-full flex-col'>
			<div className='mx-auto flex w-4/5 md:w-2/5 flex-row gap-x-4'>
				<div className='bg-chathams -mt-32 h-20 w-1'></div>

				<div className='-mt-32'>
					<p className='text-chathams text-justify capitalize'>
						At Ideate Zone We Partner, Support, Fund, Scale and
						Power Africa's Best Founders and Start-Ups. Our Passion
						Is To See That Early-Stage Start-Ups Achieve Their Bold
						Ambitions.
					</p>
				</div>
			</div>
			<div className="px-10 md:px-0">
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
