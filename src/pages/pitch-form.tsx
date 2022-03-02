import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import "tw-elements";

const PitchForm = () => {
	const [form, setForm] = useState(0);
	const forms = [<Form1 />, <Form2 />, <Form3 />, <Form4 />];

	return (
		<div className='flex h-screen w-screen flex-col justify-between'>
			<div>
				<StaticImage src='../images/ideate.png' alt='Logo' />
			</div>

			<div className='mx-auto flex h-2/3 flex-row justify-around'>
				<div>
					<ul
						className='stepper stepper-vertical'
						data-mdb-stepper='stepper'
						data-mdb-stepper-type='vertical'
					>
						<li className='stepper-step stepper-active'>
							<div className='stepper-head'>
								<span className='stepper-head-icon'> 1 </span>
								<span className='stepper-head-text'>
									{" "}
									step1{" "}
								</span>
							</div>
							{/* <div className='stepper-content'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</div> */}
						</li>
						<li className='stepper-step stepper-active stepper-completed'>
							<div className='stepper-head'>
								<span className='stepper-head-icon'> 2 </span>
								<span className='stepper-head-text'>
									{" "}
									step2{" "}
								</span>
							</div>
							{/* <div className='stepper-content'>
								Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex
								ea commodo consequat.
							</div> */}
						</li>
						<li className='stepper-step'>
							<div className='stepper-head'>
								<span className='stepper-head-icon'> 3 </span>
								<span className='stepper-head-text'>
									{" "}
									step3{" "}
								</span>
							</div>
							{/* <div className='stepper-content'>
								Duis aute irure dolor in reprehenderit in
								voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</div> */}
						</li>
					</ul>
				</div>

				<div>{forms[form]}</div>
			</div>

			<div className='flex flex-row gap-x-10'>
				<div className='text-gray-300'>Prev</div>

				<div>|</div>

				<div className='text-chathams right-0'>Next</div>
			</div>
		</div>
	);
};

const Form1 = () => {
	return (
		<div className='flex flex-col'>
			<div>
				<div>Startup name:</div>

				<div>
					<input type='text' className='border-0 border-b-2' />
				</div>
			</div>

			<div>
				<div>Where is your company based (headquartered)?</div>

				<div>
					<input type='text' className='border-0 border-b-2' />
				</div>
			</div>

			<div>
				<div>What is the URL of your company?</div>

				<div>
					<input type='text' className='border-0 border-b-2' />
				</div>
			</div>

			<div>
				<div>What is your email address?</div>

				<div>
					<input type='text' className='border-0 border-b-2' />
				</div>
			</div>

			<div>
				<div>Paste in your LinkedIn profile URL:</div>

				<div>
					<input type='text' className='border-0 border-b-2' />
				</div>
			</div>
		</div>
	);
};

const Form2 = () => {
	return <div>Form2</div>;
};

const Form3 = () => {
	return <div>Form3</div>;
};

const Form4 = () => {
	return <div>Form4</div>;
};

export default PitchForm;
