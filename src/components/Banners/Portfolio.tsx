import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioBanner = () => (
	<div className='mx-auto flex h-[500px] w-full flex-row justify-between gap-x-4 px-20'>
		<div className='my-auto ml-20 flex w-2/3 flex-col gap-y-4'>
			<div className='text-chathams w-full text-2xl'>
				<div className='font-semibold'>
					We are a global network of Blockchain enthusiasts.
				</div>{" "}
				Our goal is to support innovative and disruptive Blockchain
				startups into the ICO stage
			</div>

			<div className='text-[#1E94ED]'>
				Now they’re worth over $100 Million.
			</div>
		</div>

		<div className='my-auto w-1/3'>
			<StaticImage
				src='../../images/ban3.jpg'
				alt=''
				className=''
				width={800}
			/>
		</div>
	</div>
);

export default PortfolioBanner;
