import { useAppSelector } from "@/hooks/redux/hooks";

export default function Chat() {
	const messages = useAppSelector((state) => state.chat.messages);

	if (!messages.length) return <p>No messages yet.</p>;

	const { result } = messages[0]; // ✅ Destructure result
	const { text, version, files } = result;

	return (
		<div>
			<p>{text}</p>
			{version && <p>Version: {version}</p>}

			{files.map((file, fileIndex) => (
				<div key={fileIndex}>
					<h2 className="font-bold text-lg mt-4">{file.path}</h2>
					<ul className="bg-gray-900 text-green-300 p-4 rounded font-mono text-sm">
						{Object.entries(file.content).map(([lineNumber, lineCode]) => (
							<li key={lineNumber}>
								<span className="text-gray-500 select-none">
									{lineNumber.padStart(3, "0")}:{" "}
								</span>
								<span>{lineCode}</span>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
