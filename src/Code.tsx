import React, { useEffect, useRef } from "react";
import Prism from "prismjs";

type Props = {
	code: string;
	language: string;
	theme: string;
};

export default function CodeBlock({ code, language, theme }: Props) {
	useEffect(() => {
		console.log("called useeffect prism highlight");
		Prism.highlightAll();
	}, [code, language, theme]);

	return (
		<>
			<link
				rel="stylesheet"
				type="text/css"
				href={`${process.env.PUBLIC_URL}/prismcss/${theme}.css`}
			/>
			<pre className="m-0 h-full w-full">
				<code className={`language-${language}`}>{code}</code>
			</pre>
		</>
	);
}
