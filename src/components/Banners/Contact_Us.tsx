import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { BasicButton } from "../Buttons";

const Contact_Us = () => {
	return (
		<div className='bg-chathams grid h-[500px] w-full grid-cols-3 text-white'>
			<div className='from-chathams-300 via-chathams-400 to-chathams relative col-span-2 h-full w-full bg-gradient-to-r'>
				<StaticImage
					src='../../images/contact_us.png'
					alt=''
					className='absolute left-0 h-full w-full opacity-10'
				/>

				<div className='my-48 -ml-40 flex w-full flex-row justify-center gap-x-4'>
					<div className='h-20 w-px bg-white'></div>

					<div className='flex flex-col gap-y-2'>
						<div className='z-30 text-4xl font-semibold'>
							Contact Us
						</div>
						<div>We can’t wait to make your ideas a reality</div>
					</div>
				</div>
			</div>

			<div className='col-span-1'>
				<div className='flex flex-col px-10 my-6 gap-y-2 mx-auto'>
					<div className="text-2xl font-semibold">Get In Touch</div>

					<div className='h-px w-10 bg-white'></div>

					<div className='flex flex-col gap-y-2'>
						<div>
							<input type='text' className="px-4 py-3 w-full" placeholder="Name" />
						</div>

                        <div>
							<input type='email' className="px-4 py-3 w-full" placeholder="Email" />
						</div>

                        <div>
							<input type='text' className="px-4 py-3 w-full" placeholder="Company Name" />
						</div>

                        <div>
							<textarea className="w-full resize-none px-4 py-3" rows={5} placeholder="Message"></textarea>
						</div>

                        <div className="mt-4">
                            <BasicButton text="Send Message" type="light" />
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact_Us;
