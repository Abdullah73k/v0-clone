import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import RenderImageUpload from "./RenderImageUpload";
import { useChatInput } from "@/hooks/useChatInput";

interface ChatInput {
	type: string;
	id: string;
	label: string;
}

export default function ChatInput() {
	// ref to extract the image input from user
	const imageInputRef = useRef<HTMLInputElement | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const { state, promptFormAction, isPending } = useChatInput();

	// onClick paperclip icon, the ref will open the hidden file input element
	function handleChatInputSubmit() {
		imageInputRef.current?.click();
	}

	// when user adds a image, we will dispatch an action to save the image in the redux state
	function handleFileChange() {
		const selectedFile = imageInputRef.current?.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
		}
	}

	function handleRemovingFile() {
		setFile(null);
		if (imageInputRef.current) {
			imageInputRef.current.value = "";
		}
	}

	return (
		<form action={promptFormAction}>
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
					name="prompt"
				/>

				<div className="flex gap-2 w-full items-center justify-end">
					<Input
						type="file"
						className="hidden"
						ref={imageInputRef}
						onChange={handleFileChange}
						name="file"
					/>
					<Button
						variant="ghost"
						size="icon"
						className="p-2 cursor-pointer"
						onClick={handleChatInputSubmit}
					>
						<Paperclip className="w-5 h-5 text-muted-foreground " />
					</Button>
					<Button className="cursor-pointer" type="submit" disabled={isPending}>
						Create
					</Button>
				</div>
				<div className="h-px w-full bg-muted my-2"></div>
				{file && (
					<RenderImageUpload file={file} removeFile={handleRemovingFile} />
				)}

				{state.errors && <p>{state.errors[0]}</p>}
			</div>
		</form>
	);
}
