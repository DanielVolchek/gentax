import React, { useEffect, useRef } from "react";
import Prism from "prismjs";

type Props = {
	code: string;
	language: string;
};

export default function CodeBlock({ code, language }: Props) {
	useEffect(() => {
		Prism.highlightAll();

		setTimeout(() => {
			if (ref.current) {
				console.log(getComputedStyle(ref.current));
			}
		});
	}, [code, language]);

	const ref = useRef<HTMLPreElement>(null);
	return (
		<pre>
			<code ref={ref} className={`language-${language}`}>
				{code}
			</code>
		</pre>
	);
}
