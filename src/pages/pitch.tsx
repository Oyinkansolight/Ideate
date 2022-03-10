import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BasicButton } from "../components/Buttons";
import { Widget } from "@typeform/embed-react";
import Header from "../components/Header";

// const Pitch = () => {
// 	return (
// 		<div className='h-screen w-screen'>
// 			<StaticImage
// 				src='../images/pitch.png'
// 				alt='Apply'
// 				className='fixed z-0 h-full w-full'
// 			/>

// 			<div className='bg-chathams fixed h-full w-full opacity-80'></div>

// 			<div className='absolute flex w-full'>
// 				<div className=' z-10 my-52 mx-auto h-[500px] w-2/5 overflow-hidden bg-gray-300 shadow-md'>
// 					<div className='mx-auto flex flex-col gap-y-6 px-36 py-10'>
// 						<div>
// 							<StaticImage
// 								src='../images/ideate.png'
// 								alt='Logo'
// 								width={300}
// 							/>
// 						</div>

// 						<div className='text-lg'>
// 							We provide exceptional startups with capital, expert
// 							operational support and access to world-class
// 							corporates.
// 						</div>

// 						<div className='text-chathams mt-10 text-2xl font-semibold'>
// 							Submit pitch deck: Tell us about your business or
// 							idea.
// 						</div>

// 						<div>
// 							<Link to='/pitch-form'>
// 								<BasicButton text='Begin Application' />
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Pitch;

const Pitch = () => {
	return (
		<>
			<Header />
			<Widget
				id='hx7iL825'
				style={{ width: "100%", height: "100vh" }}
				className='my-form'
			/>
		</>
	);
};

export default Pitch;
