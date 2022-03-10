import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioBanner = () => (
	<div className='mx-auto flex h-[500px] w-full flex-row justify-between gap-x-20'>
		<div className='my-auto ml-20 flex w-1/2 flex-col gap-y-4'>
			<div className='text-chathams w-2/3 text-3xl font-semibold'>
				Ideate Zone is a multi-stage accelerator plan backed by a
				flourishing Network, designed to find, and fund innovative and
				disruptive startups in need of financing and expansion.
			</div>

			<div className='text-[#1E94ED]'>
				Now they’re worth over $100 Million.
			</div>
		</div>

		<div className='my-auto w-1/2'>
			<StaticImage src='../../images/banner1.jpg' alt='' className='' />
		</div>
	</div>
);

export default PortfolioBanner;
