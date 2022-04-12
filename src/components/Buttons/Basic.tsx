import React from "react";

interface Props {
	text: string;
	type?: string;
	onPress?: (any) => void;
}

const BasicButton = (props: Props) => (
	<button
	onClick={props.onPress}
		className={`px-6 rounded-md md:px-6 py-2 text-lg font-semibold transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ${
			props.type === "light"
				? "text-chathams bg-white hover:bg-gray-200"
				: "bg-chathams text-white hover:bg-chathams-400"
		}`}
	>
		{props.text}
	</button>
);

export default BasicButton;
