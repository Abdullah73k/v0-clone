import { useAppSelector } from "@/hooks/redux/hooks";

export default function Chat() {
	const messages = useAppSelector((state) => state.chat.messages);

	return messages.map((m, i) => <p key={i}>{m}</p>);
}
