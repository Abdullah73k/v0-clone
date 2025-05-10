import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import RenderImageUpload from "./RenderImageUpload";
import { useAppDispatch, useAppSelector } from "@/hooks/redux/hooks";
import { inputActions } from "../store/input-slice";

interface ChatInput {
	type: string;
	id: string;
	label: string;
}

export default function ChatInput() {
	const imageInputRef = useRef<HTMLInputElement | null>(null);
	const [file, setFile] = useState<File | null>(null);

	const uploadedImage = useAppSelector((state) => state.input.uploadedImage);
	const dispatch = useAppDispatch();

	function handleChatInputSubmit() {
		imageInputRef.current?.click();
	}

	function handleFileChange() {
		if (imageInputRef.current?.files) {
			dispatch(
				inputActions.setUploadedImage({
					payload: imageInputRef.current.files[0],
				})
			);
		}
	}

	return (
		// <div className="grid w-full max-w-sm items-center gap-1.5">
		// 	<Label htmlFor={id}>{label}</Label>
		// 	<Input id={id} type={type} />
		// </div>

		// components/PromptInput.tsx

		<div className="border rounded-lg px-4 py-2 flex items-center gap-2 w-4xl shadow-sm flex-col">
			<Textarea
				placeholder="Ask v0 to build..."
				className="
				border-none 
				outline-none 
				focus:outline-none 
				focus:ring-0
				ring-0
				shadow-none
				focus:shadow-none
				focus-visible:outline-none
				focus-visible:ring-0
				focus-visible:shadow-none
        		bg-transparent
        		resize-none
				"
			/>

			<div className="flex gap-2 w-full items-center justify-end">
				<Input
					type="file"
					className="hidden"
					ref={imageInputRef}
					onChange={handleFileChange}
				/>
				<Button
					variant="ghost"
					size="icon"
					className="p-2 cursor-pointer"
					onClick={handleChatInputSubmit}
				>
					<Paperclip className="w-5 h-5 text-muted-foreground " />
				</Button>
				{/* <Button variant="ghost" size="icon" className="p-2 cursor-pointer">
					<Upload className="w-5 h-5" />
				</Button> */}
				<Button className="cursor-pointer">Create</Button>
			</div>
			<div className="h-px w-full bg-muted my-2"></div>
			{file && <RenderImageUpload file={file} />}
		</div>
	);
}
