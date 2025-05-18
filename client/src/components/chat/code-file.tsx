interface CodeFileProps {
	line: string;
	code: string;
}

export default function CodeFile({ line, code }: CodeFileProps) {
	return (
		<div className="flex gap-6 h-auto">
			<p>{line}</p>
			<p>{code}</p>
		</div>
	);
}
