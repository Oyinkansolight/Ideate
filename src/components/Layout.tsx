import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<main className='h-screen w-full'>
			<Header />
			{children}
			<Footer />
		</main>
	);
}
