import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import BasicButton from "./Buttons/Basic";

interface Props {
	menus?: string;
	logo?: string;
}

const Header = (props: Props) => {
	let menu_theme = "my-auto flex flex-row gap-x-16 font-semibold text-black";
	if (props.menus === "light") {
		menu_theme = "my-auto flex flex-row gap-x-16 font-semibold text-white";
	}

	return (
		<>
			<div className='hidden h-24 w-full flex-row gap-x-96 px-20 md:flex'>
				<div className='my-auto drop-shadow-lg'>
					{props.logo !== "light" ? (
						<Link to='/'>
							<StaticImage
								src='../images/ideate.png'
								alt='Text Logo'
								className='drop-shadow-lg'
							/>
						</Link>
					) : (
						<StaticImage
							src='../images/ideate_light.png'
							alt='Text Logo'
							className='drop-shadow-lg'
						/>
					)}
				</div>

				<div className={menu_theme}>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/home'>Home</Link>
					</div>
					{/* <div className='decoration-chathams cursor-pointer underline-offset-[1rem] hover:underline'>
					Startups
				</div> */}
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/partners'>Partners</Link>
					</div>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						<Link to='/ideate_lab'>Ideate Lab</Link>
					</div>
					<div className='decoration-chathams cursor-pointer decoration-2 underline-offset-[1rem] hover:underline'>
						Application
					</div>
				</div>

				{/* <div className='my-auto flex flex-row gap-x-6'>
				<Link to='/pitch'>
					<BasicButton text='Submit Pitch Deck' type="light" />
				</Link>
			</div> */}
			</div>
		</>
	);
};

export default Header;
