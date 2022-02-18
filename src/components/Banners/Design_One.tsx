import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Design_One = () => (
	<div className='relative flex h-[600px] w-full overflow-hidden bg-gray-200'>
		<div className='center absolute bottom-0 mx-auto flex w-full flex-col'>
			<div className='mx-auto flex w-2/5 flex-row gap-x-4'>
				<div className='bg-chathams h-20 w-1 -mt-32'></div>

				<div className="-mt-32">
					<p className='text-chathams font-semibold text-justify capitalize'>
						Ideate Zone exists to shape the future of marketing,
						advertising and commerce technology, we’ve successfully
						worked with over 60 startups and understand what it
						takes to create global Impact for businesses that move
						people.
					</p>
				</div>
			</div>
			<StaticImage
				src='../../images/suits.png'
				alt='Design Banner 1'
				className='mx-auto'
			/>
		</div>
	</div>
);

export default Design_One;
