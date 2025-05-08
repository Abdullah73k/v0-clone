import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ChatInput {
	type: string;
	id: string;
	label: string;
}

export default function ChatInput({ type, id, label }: ChatInput) {
	return (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} type={type} />
		</div>
	);
}
