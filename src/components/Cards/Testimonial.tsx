import React from "react";

interface Props {
	text: string;
	image: any;
	name: string;
	organization: string;
}
const Testimonial = (props: Props) => {
	return (
		<div className='flex flex-col gap-y-20'>
			<div className='bg-[#DBE9F4] static z-10 h-[250px] w-[400px]'>
				<div className="my-12 text-justify px-20">{props.text}</div>

				<div className='absolute inline-block w-11 overflow-hidden'>
					<div className=' bg-[#DBE9F4]  h-16 origin-top-right rotate-45 transform'></div>
				</div>
			</div>
            
            <div className='flex flex-row gap-x-2'>
                <div className="rounded-full h-20 w-20 overflow-hidden my-auto">
					{props.image}
				</div>

                <div className='flex flex-col gap-y-1 my-auto'>
                    <div className="font-semibold text-xl text-chathams uppercase">
                        {props.name}
                    </div>

                    <div className="font-light">
                        {props.organization}
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Testimonial;
