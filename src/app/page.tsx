"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
	const [inputText, setInputText] = useState("");
	const [outputText, setOutputText] = useState("");

	const handleConvert = async () => {
		const result = (await axios.post("http://localhost:3000/api/convert"))
			.data;
		console.log(result);

		setOutputText(inputText.toUpperCase());
	};
	const handleClear = () => {
		setInputText("");
		setOutputText("");
	};

	return (
		<main className="flex items-center justify-center min-h-screen">
			<div className="flex flex-col items-center gap-5 p-5 w-full max-w-lg">
				<textarea
					className="w-full p-2 border border-gray-300 rounded text-black"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>{" "}
				<div className="flex space-x-12">
					<button
						className="w-52 h-12 bg-red-500 text-white rounded"
						onClick={handleConvert}
					>
						convert
					</button>
					<button
						className="w-52 h-12 bg-red-500 text-white rounded"
						onClick={handleClear}
					>
						clear
					</button>
				</div>
				<textarea
					className="w-full p-2 border border-gray-300 rounded text-black"
					value={outputText}
				/>
			</div>
		</main>
	);
}
