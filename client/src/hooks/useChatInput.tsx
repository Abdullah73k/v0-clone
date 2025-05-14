import { useActionState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { pageActions } from "@/components/store/page-slice";
import { chatActions } from "@/components/store/chat-slice"; // make sure you have appendStreamingChunk
import { convertBase64 } from "@/lib/convert-image";

type State = { errors: string[] } | { errors: null };
const apiURL = "http://localhost:3000/api/chat/";

export function useChatInput() {
	const initialState = { errors: null };
	const dispatch = useAppDispatch();

	async function inputAction(
		prevState: State,
		formData: FormData
	): Promise<State> {
		const file = formData.get("file");
		const prompt = formData.get("prompt");
		const promptText = typeof prompt === "string" ? prompt.trim() : "";
		const hasFile = file instanceof File && file.size > 0;

		const base64Image = file instanceof File ? await convertBase64(file) : null;

		const errors: string[] = [];
		if (promptText.length === 0 && !hasFile) {
			errors.push("You must add a reference image or add a prompt");
		}
		if (errors.length > 0) return { errors };

		try {
			dispatch(pageActions.setPage("chat"));

			const response = await fetch(apiURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ promptText, base64Image }), // Add file later if using base64
			});

			if (!response.ok) {
				const errorText = await response.text();
				console.error("Server error:", errorText);
				return { errors: [errorText || "Failed to fetch from server"] };
			}

			if (!response.body) {
				return { errors: ["No response body received"] };
			}

			const reader = response.body.getReader();
			const decoder = new TextDecoder();
			let fullText = "";

			while (true) {
				const { value, done } = await reader.read();
				if (done) break;

				const chunk = decoder.decode(value, { stream: true });
				fullText += chunk;

				// Send the streamed text to Redux (or local state)
				dispatch(chatActions.appendStreamingChunk(chunk));
			}

			console.log(fullText);

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
