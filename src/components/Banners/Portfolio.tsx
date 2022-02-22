import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioBanner = () => (
	<div className='flex h-[500px] w-full flex-row justify-between gap-x-20 mx-auto'>
		<div className='my-auto flex flex-col w-1/2 ml-20 gap-y-4'>
			<div className='text-chathams w-2/3 font-semibold text-4xl'>
				We back Incredible entrepreneurs at the beginning of their
				journey
			</div>

			<div className='text-[#1E94ED]'>
				Now they’re worth over $100 Million.
			</div>
		</div>

        <div className="w-1/2 my-auto">
            <StaticImage src="../../images/banner1.jpg" alt="" className=""  />
        </div>
	</div>
);

export default PortfolioBanner;
