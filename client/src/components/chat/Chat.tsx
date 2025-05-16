import { useAppSelector } from "@/hooks/redux/hooks";

export default function Chat() {
	const messages = useAppSelector((state) => state.chat.messages);
	console.log(messages);

	return (
		<>
			<p>hello</p>
		</>
	);
}
