import { useAppSelector } from "@/hooks/redux/hooks";


export default function CodeFile() {
    const selectedFile = useAppSelector((state) => state.chat.selectedFile)

	if (!selectedFile) return <p>Select a file to view</p>;
	const { content } = selectedFile;
	const code = Object.entries(content);

	return (
		<>
			{code.map((line) => (
				<div className="flex gap-6 h-auto " key={line[0]}>
					<p>{line[0]}</p>
					<p>{line[1]}</p>
				</div>
			))}
		</>
	);
}
