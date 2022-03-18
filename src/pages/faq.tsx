import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Faq from "../components/Faq";
import Layout from "../components/Layout";

const FaqPage = () => {
	return (
		<Layout>
			<div className='mb-40 flex w-full flex-col'>
				<div className="w-full h-[700px] overflow-hidden relative">
					<StaticImage src="../images/faq.jpg" alt="How can we help?" />

					<div className='bg-chathams absolute top-0 z-10 h-full w-full opacity-70'></div>
				</div>
				<div className='py-20 dark:bg-gray-600'>
					<h1 className='text-chathams text-center text-4xl font-extrabold dark:text-gray-50'>
						Frequently Asked Questions
					</h1>

					<div className='mx-4 mt-20 grid grid-cols-1 gap-10 capitalize md:mx-40 md:grid-cols-2'>
						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								How do I apply for funding at Ideate?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>
						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								How exactly does ideate come in after I have
								pitched my idea?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>
						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								How long will it take for the funds to be
								allocated after I have been selected?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>
						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								If I have got other concepts asides from
								Blockchain can I still pitch?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								What documentation do I need when pitching my
								idea?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								I'm working on a pitch for Ideate that focuses
								on a blockchain-based micro-loans idea. Are you
								open to new ideas outside of that?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								How long will it take for the funds to be
								allocated after I have been selected?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								Can I meet the investors?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								If I am not the founder, but have a Blockchain
								dubbed idea can I pitch it?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								How can I be certain Ideate will help scale up
								my idea?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								Can I, in the future buy my angels out?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								How long does the application and funding
								process take?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								Is there a deadline to apply?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								What amount in percentage will ideate be taking
								as equity?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								Is there a selection criterion?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>

						<div className='hover:shadow-lg hover:shadow-chathams-100 rounded-md bg-gray-100 p-4 text-gray-800 dark:bg-gray-700 dark:text-gray-50'>
							<h2 className='text-md font-semibold'>
								If my company is based outside Africa but an
								African, can I pitch?
							</h2>
							<p className='mt-4 text-sm font-light leading-6'>
								Updates coming...
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default FaqPage;
