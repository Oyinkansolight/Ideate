import React from "react";

interface Props {
	text: string;
	image: any;
	name: string;
	organization: string;
}
const Testimonial = (props: Props) => {
	return (
		<div className='flex flex-col gap-y-10'>
			<div className='static z-10 h-auto w-[300px] bg-[#DBE9F4] md:h-[250px] md:w-[400px]'>
				<div className='my-6 md:my-12 px-10 md:px-20 text-justify '>{props.text}</div>

				<div className='absolute inline-block w-11 overflow-hidden'>
					<div className=' h-16  origin-top-right rotate-45 transform bg-[#DBE9F4]'></div>
				</div>
			</div>

			<div className='flex flex-row gap-x-2 mt-4 mb-10 md:mt-0 md:mb-0'>
				<div className='my-auto h-12 w-12 md:h-20 md:w-20 overflow-hidden rounded-full'>
					{props.image}
				</div>

				<div className='my-auto flex flex-col gap-y-1'>
					<div className='text-chathams text-xl font-semibold uppercase'>
						{props.name}
					</div>

					<div className='font-light'>{props.organization}</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
