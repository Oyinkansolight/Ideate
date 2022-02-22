import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Design_Two = () => (
	<div className='mx-auto flex w-full'>
		<div className='relative w-full'>
			<StaticImage
				src='../../images/banner_2.png'
				alt='About Banner'
				className='w-full'
			/>

			<div>
				<div className='absolute -my-[30rem] flex text-center place-content-center font-bold text-white text-5xl w-full'>
					<div className="w-1/2">
                    {
						"We’re Africa’s Leading Startup Accelerator and Venture Platform"
					}
                    </div>
				</div>
			</div>
		</div>
	</div>
);

export default Design_Two;
