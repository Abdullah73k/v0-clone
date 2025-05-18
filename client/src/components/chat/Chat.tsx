import { useAppSelector } from "@/hooks/redux/hooks";
import { AppSidebar } from "./app-sidebar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import CodeFile from "./code-file";
import { useState } from "react";

export default function Chat() {
	const [selectedFile, setSelectedFile] = useState(null)
	const messages = useAppSelector((state) => state.chat.messages);

	// if (!messages.length) return <p>No messages yet.</p>;

	// const { result } = messages[0]; // ✅ Destructure result
	// const { text, version, files } = result;

	function handleFileSelection(key) {
		
	}

	return (
		// <div>
		// 	{/* <p>{text}</p>
		// 	{version && <p>Version: {version}</p>}

		// 	{files.map((file, fileIndex) => (
		// 		<div key={fileIndex}>
		// 			<h2 className="font-bold text-lg mt-4">{file.path}</h2>
		// 			<ul className="bg-gray-900 text-green-300 p-4 rounded font-mono text-sm">
		// 				{Object.entries(file.content).map(([lineNumber, lineCode]) => (
		// 					<li key={lineNumber}>
		// 						<span className="text-gray-500 select-none">
		// 							{lineNumber.padStart(3, "0")}:{" "}
		// 						</span>
		// 						<span>{lineCode}</span>
		// 					</li>
		// 				))}
		// 			</ul>
		// 		</div>
		// 	))} */}
		// </div>
		<div className="h-1/1 flex">
			<div className="h-1/1 w-1/3 flex items-center justify-center">
				<div className="h-34/36 w-11/12">chat area</div>
			</div>
			<div className="h-1/1 w-2/3 flex">
				<AppSidebar />
				<Card className="w-4/5 shadow-none rounded-xs">
					<ScrollArea className="h-1/1 m-2">
						<CodeFile />
					</ScrollArea>
				</Card>
			</div>
		</div>
	);
}
