import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
	children: any;
	menus?: string;
	logo?: string;
}

export default function Layout({ children, menus, logo }: Props) {
	return (
		<main className='h-screen w-full overflow-x-hidden'>
			<Header menus={menus} logo={logo} />
			{children}
			<Footer />
		</main>
	);
}
