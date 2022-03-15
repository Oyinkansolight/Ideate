import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioBanner = () => (
	<div className='mx-auto flex h-[500px] w-full flex-row justify-between gap-x-4'>
		<div className='my-auto ml-20 flex w-2/3 flex-col gap-y-4'>
			<div className='text-chathams w-full text-2xl font-semibold'>
				Ideate Zone is a multi-stage IPO accelerator backed by a
				flourishing network of contacts, designed to find and fund
				innovative Blockchain startups in need of financing and
				expansion.
			</div>

			<div className='text-[#1E94ED]'>
				Now they’re worth over $100 Million.
			</div>
		</div>

		<div className='my-auto w-1/3'>
			<StaticImage src='../../images/banner1.jpg' alt='' className='' width={800} />
		</div>
	</div>
);

export default PortfolioBanner;
