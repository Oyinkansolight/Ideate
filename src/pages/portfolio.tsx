import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Contact_Us, PortfolioBanner } from "../components/Banners";
import { BasicButton } from "../components/Buttons";
import Layout from "../components/Layout";

const Portfolio = () => (
	<Layout>
		<div className='mx-auto flex w-full px-20'>
			<PortfolioBanner />
		</div>

		<div className='relative my-16 flex w-full flex-col gap-y-6 text-center'>
			<div className='bg-chathams absolute left-0 h-32 w-px'></div>

			<div className='text-chathams text-4xl'>
				Our Portfolio Companies
			</div>

			<div className='mx-auto w-1/3 font-light text-gray-500'>
				80% of our clients doubled their revenue in the first 3 months,
				but don’t hear it from us; see what we have done
			</div>

			<div className='mt-10 flex flex-row justify-center gap-x-10'>
				<div>
					<BasicButton text='All Works' />
				</div>

				<div>
					<BasicButton text='Branding' type='light' />
				</div>

				<div>
					<BasicButton text='Startup' type='light' />
				</div>

				<div>
					<BasicButton text='Product Strategy' type='light' />
				</div>

				<div>
					<BasicButton text='Digital Marketing' type='light' />
				</div>
			</div>
		</div>

		<div className='my-20 grid w-full grid-cols-4 place-items-center gap-y-10 px-20'>
			<div>
				<StaticImage src='../images/port_1.png' alt='' className='' />
			</div>

			<div>
				<StaticImage src='../images/port_2.png' alt='' className='' />
			</div>

			<div>
				<StaticImage src='../images/port_3.png' alt='' className='' />
			</div>

			<div>
				<StaticImage src='../images/port_4.png' alt='' className='' />
			</div>

			<div>
				<StaticImage src='../images/port_5.png' alt='' className='' />
			</div>

			<div>
				<StaticImage src='../images/port_6.png' alt='' className='' />
			</div>

			<div>
				<StaticImage src='../images/port_7.png' alt='' className='' />
			</div>

			<div>
				<StaticImage src='../images/port_8.png' alt='' className='' />
			</div>
		</div>

		<div>
        <div className='flex w-full my-40 mx-auto px-20'>
			<div className='flex flex-row gap-x-24'>
				<div>
					<StaticImage
						src='../images/port_found.png'
						alt={"Card Image 3"}
					/>
				</div>

				<div className='my-auto flex w-[450px] flex-col gap-y-6'>
					<div className='text-chathams text-2xl font-semibold'>
						We power founders to go Further, Faster.
					</div>

					<div className='text-justify'>
						We help clients develop a digital strategy so they know
						what they need to do and why they need to do it.
					</div>

					<div className='mt-4'>
						<BasicButton text={"Apply Now"} />
					</div>
				</div>
			</div>
		</div>
        </div>

        <div className='my-6 w-full'>
			<Contact_Us />
		</div>
	</Layout>
);

export default Portfolio;
