import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import BasicButton from "./Buttons/Basic";

const Header = () => (
	<>
		<div className='hidden h-24 w-full flex-row justify-between px-20 md:flex'>
			<div className='my-auto drop-shadow-lg'>
				<Link to='/'>
					<StaticImage src='../images/ideate.png' alt='Text Logo' className="drop-shadow-lg" />
				</Link>
			</div>

			<div className='my-auto flex flex-row gap-x-16 text-white font-semibold'>
				<div className='decoration-chathams decoration-2 cursor-pointer underline-offset-[1rem] hover:underline'>
					<Link to='/'>Home</Link>
				</div>
				{/* <div className='decoration-chathams cursor-pointer underline-offset-[1rem] hover:underline'>
					Startups
				</div> */}
				<div className='decoration-chathams decoration-2 cursor-pointer underline-offset-[1rem] hover:underline'>
					<Link to='/portfolio'>Portfolio</Link>
				</div>
				<div className='decoration-chathams decoration-2 cursor-pointer underline-offset-[1rem] hover:underline'>
					<Link to='/about'>About Us</Link>
				</div>
				<div className='decoration-chathams decoration-2 cursor-pointer underline-offset-[1rem] hover:underline'>
					Investors
				</div>
			</div>

			<div className='my-auto flex flex-row gap-x-6'>
				<Link to='/pitch'>
					<BasicButton text='Submit Pitch Deck' type="light" />
				</Link>
			</div>
		</div>
	</>
);

export default Header;
