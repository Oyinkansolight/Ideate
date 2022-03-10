import React from "react";
import Header from "../components/Header";
import { Widget } from "@typeform/embed-react";

const InvestorForm = () => {
	return (
		<>
			<Header />
			<Widget
				id='s5U5RqGd'
				style={{ width: "100%", height: "100vh" }}
				className='my-form'
			/>
		</>
	);
};

export default InvestorForm;
