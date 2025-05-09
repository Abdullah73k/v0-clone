interface RenderImageUploadProps {
	file: File;
}

export default function RenderImageUpload({ file }: RenderImageUploadProps) {
	return (
		<div className="w-full flex gap-4">
			<div className="w-1/6 h-24 cursor-pointer">
				<p className="text-xs text-center">Uploaded file: {file.name}</p>
			</div>
		</div>
	);
}
