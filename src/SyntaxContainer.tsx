import React, { useState } from "react";
import Block from "./Block";
import Code from "./Code";
import Editor from "./Editor";
import OptionsContainer from "./OptionsContainer";

type Props = {};

export default function SyntaxContainer({}: Props) {
	const [code, setCode] = useState("");
	const [language, setLanguage] = useState("markup");
	const [theme, setTheme] = useState("okaida");

	const changeLang = (value: string) => {
		setLanguage(value);
	};
	const changeTheme = (value: string) => {
		setTheme(value);
	};

	return (
		<div className="mx-[10%] mt-3 box-border flex h-[80%] flex-col items-center justify-start border-2 border-solid border-black">
			<OptionsContainer
				changeLang={changeLang}
				changeTheme={changeTheme}
			/>
			<div className="flex h-full w-full flex-col md:flex-row">
				<Block>
					<Editor
						onInput={(event) => setCode(event.currentTarget.value)}
					/>
				</Block>
				<Block>
					<Code code={code} language={language} theme={theme} />
				</Block>
			</div>
		</div>
	);
}
