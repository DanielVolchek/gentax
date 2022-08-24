import "./App.css";
import SyntaxContainer from "./SyntaxContainer";
import Footer from "./Footer";

function App() {
	return (
		<main className="m-0 h-screen bg-[#bababa]">
			<h1 className="bold text-center text-6xl">GenTaX</h1>
			<SyntaxContainer />
			<Footer />
		</main>
	);
}

export default App;

/* <div className="flex flex-col justify-center items-center h-[70vh]">
	<CodeBlock language={language} code={input} />
</div> */
