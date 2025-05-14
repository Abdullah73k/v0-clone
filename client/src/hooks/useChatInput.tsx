import { useActionState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { pageActions } from "@/components/store/page-slice";
import { chatActions } from "@/components/store/chat-slice";

type State = { errors: string[] } | { errors: null };
const apiURL = "http://localhost:3000/api/chat/";

export function useChatInput() {
	const initialState: State = { errors: null };
	const dispatch = useAppDispatch();

	async function inputAction(
		prevState: State,
		formData: FormData
	): Promise<State> {
		const file = formData.get("file");
		const prompt = formData.get("prompt");
		const promptText = typeof prompt === "string" ? prompt.trim() : "";
		const hasFile = file instanceof File && file.size > 0;

		const errors: string[] = [];
		if (promptText.length === 0 && !hasFile) {
			errors.push("You must add a reference image or add a prompt");
		}
		if (errors.length > 0) return { errors };

		try {
			dispatch(pageActions.setPage("chat"));

			// ✅ Create a new FormData to send to the backend
			const formDataToSend = new FormData();
			formDataToSend.append("prompt", promptText);
			if (hasFile) formDataToSend.append("file", file);

			// ✅ Send the FormData with no manual Content-Type
			const response = await fetch(apiURL, {
				method: "POST",
				body: formDataToSend,
			});
			const data = await response.json();

			if (!response.ok) {
				const errorText = await response.text();
				console.error("Server error:", errorText);
				return { errors: [errorText || "Failed to fetch from server"] };
			}

			if (!response.body) {
				return { errors: ["No response body received"] };
			}

			dispatch(chatActions.setMessageResponse(data));

			return { errors: null };
		} catch (error: unknown) {
			console.error("Unknown fetch error:", error);
			return {
				errors: [typeof error === "string" ? error : "Unexpected error"],
			};
		}
	}

	const [state, promptFormAction, isPending] = useActionState(
		inputAction,
		initialState
	);

	return {
		state,
		promptFormAction,
		isPending,
	};
}
