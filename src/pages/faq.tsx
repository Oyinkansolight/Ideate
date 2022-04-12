import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Faq from "../components/Faq";
import Layout from "../components/Layout";

const FaqPage = () => {
	return (
		<Layout>
			<div className='mb-40 flex w-full flex-col'>
				<div className='-mt-24' id='faq_head'>
					<h1 className='mt-[15%] text-center text-4xl font-bold text-white'>
						Frequently Asked Questions
					</h1>
				</div>

				<div id='faq_pattern'></div>

				<div className='mx-auto -mt-96 w-2/5 space-y-4'>
					<Item title='How Do I Apply For Funding On IdeateZone?'>
						Updates coming...
					</Item>
					<Item
						title='How exactly does ideate come in after I have
								pitched my idea?'
					>
						Updates coming...
					</Item>
					<Item
						title='How long will it take for the funds to be
								allocated after I have been selected?'
					>
						Updates coming...
					</Item>
					<Item
						title='If I have got other concepts asides from
								Blockchain can I still pitch?'
					>
						Updates coming...
					</Item>
				</div>

				{/* <div className='py-20'>
					<div className='mx-4 mt-20 grid grid-cols-1 gap-10 capitalize md:mx-40 md:grid-cols-2'>
						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								How do I apply for funding at Ideate?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>
						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								How exactly does ideate come in after I have
								pitched my idea?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>
						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								How long will it take for the funds to be
								allocated after I have been selected?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>
						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								If I have got other concepts asides from
								Blockchain can I still pitch?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								What documentation do I need when pitching my
								idea?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								I'm working on a pitch for Ideate that focuses
								on a blockchain-based micro-loans idea. Are you
								open to new ideas outside of that?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								How long will it take for the funds to be
								allocated after I have been selected?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								Can I meet the investors?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								If I am not the founder, but have a Blockchain
								dubbed idea can I pitch it?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								How can I be certain Ideate will help scale up
								my idea?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								Can I, in the future buy my angels out?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								How long does the application and funding
								process take?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								Is there a deadline to apply?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								What amount in percentage will ideate be taking
								as equity?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								Is there a selection criterion?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 hover:shadow-lg'>
							<h2 className='text-md font-semibold'>
								If my company is based outside Africa but an
								African, can I pitch?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>
					</div>
				</div> */}
			</div>
		</Layout>
	);
};

const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='rounded border bg-white shadow-md'>
			<button
				type='button'
				aria-label='Open item'
				title='Open item'
				className='flex w-full items-center justify-between p-4 focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className='text-lg font-medium text-left'>{title}</p>
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

export default FaqPage;
