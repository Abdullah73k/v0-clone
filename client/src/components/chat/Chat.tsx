import { useAppSelector } from "@/hooks/redux/hooks";

export default function Chat() {
	const messages = useAppSelector((state) => state.chat.messages);

	return <p>{messages[0]}</p>;
}
