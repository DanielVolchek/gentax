import React from "react";

type Props = {
	children: JSX.Element;
};

export default function Block({ children }: Props) {
	return (
		<div className="h-full max-w-[50%] flex-grow border-2 border-solid border-black">
			{children}
		</div>
	);
}
