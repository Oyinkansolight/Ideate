import React, { useState } from "react";

const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='w-[700px] rounded border shadow-sm'>
			<button
				type='button'
				aria-label='Open item'
				title='Open item'
				className='flex w-full items-center justify-between p-4 focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className='text-lg font-medium'>{title}</p>
				<div className='flex h-8 w-8 items-center justify-center rounded-full border'>
					<svg
						viewBox='0 0 24 24'
						className={`w-3 text-gray-600 transition-transform duration-200 ${
							isOpen ? "rotate-180 transform" : ""
						}`}
					>
						<polyline
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeMiterlimit='10'
							points='2,7 12,17 22,7'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</button>
			{isOpen && (
				<div className='p-4 pt-0'>
					<p className='text-gray-700'>{children}</p>
				</div>
			)}
		</div>
	);
};

export const Faq = () => {
	return (
		<div className='mx-auto px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10'>
			<div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
				<div className='space-y-4'>
					<Item title='What is minimum Investment Ticket?'>
						Updates coming...
					</Item>
					<Item title='Do you have a pitch day?'>
						Updates coming...
					</Item>
					<Item title='What Sector does Ideate Support?'>
						Updates coming...
					</Item>
					<Item title='How Long is Ideates Accelerator Program?'>
						Updates coming...
					</Item>
				</div>
			</div>
		</div>
	);
};

export default Faq;
