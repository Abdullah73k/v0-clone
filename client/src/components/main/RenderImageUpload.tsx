import { Image } from "lucide-react";
import { Button } from "../ui/button";

interface RenderImageUploadProps {
	file: File;
	removeFile: () => void;
}

export default function RenderImageUpload({
	file,
	removeFile,
}: RenderImageUploadProps) {
	return (
		<div className="w-full flex gap-4">
			<div className="w-1/6 h-24 cursor-pointer">
				<Button
					variant="outline"
					className="h-24 w-24 flex flex-col justify-center cursor-pointer"
					onClick={removeFile}
				>
					<div className="text-[48px]">
						<Image size={48} />
					</div>

					<p className="text-[7px] text-center">{file.name.slice(0, 12)}</p>
				</Button>
			</div>
		</div>
	);
}
