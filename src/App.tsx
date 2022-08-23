import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "./prism.css";
import "./App.css";
import CodeBlock from "./CodeBlock";

function App() {
	const [language, setLanguage] = useState("javascript");
	const [input, changeInput] = useState("");
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<main>
			<h1 className="text-[4rem] bold text-blue-600 text-center mt-5">
				Hello World!
			</h1>
			<div className="flex flex-col justify-center items-center h-[70vh]">
				<div className="flex flex-row">
					<button
						className="self-center px-5 py-3 bg-blue-400 shadow-lg rounded-md"
						onClick={() => {
							if (language === "javascript") setLanguage("css");
							else setLanguage("javascript");
						}}>
						Press Me to change from {language}
					</button>
					<input
						className="w-[25%]"
						placeholder="Enter Text..."
						onChange={(event) => {
							changeInput(event.target.value);
						}}></input>
				</div>
				<CodeBlock language={language} code={input} />
			</div>
		</main>
	);
}

export default App;
