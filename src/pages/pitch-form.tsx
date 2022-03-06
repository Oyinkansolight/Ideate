import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";


const PitchForm = () => {


	return (
		<div className='flex h-screen w-screen flex-col justify-between'>
			<div>
				<StaticImage src='../images/ideate.png' alt='Logo' />
			</div>

			<div className='mx-auto flex h-2/3 flex-row justify-around'>
				<div>
					
				</div>

				<div>Form Here</div>
			</div>

			<div className='flex flex-row gap-x-10'>
				<div className='text-gray-300'>Prev</div>

				<div>|</div>

				<div className='text-chathams right-0'>Next</div>
			</div>
		</div>
	);
};

export default PitchForm;
