import React from "react";

type Props = {
	children: JSX.Element;
};

export default function Block({ children }: Props) {
	return (
		<div className="h-full max-w-[100%] flex-grow border-2 border-solid border-black md:max-w-[50%]">
			{children}
		</div>
	);
}
