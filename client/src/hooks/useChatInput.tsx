import { useActionState } from "react";
import axios from "axios";

type State = { errors: string[] } | { errors: null };
const apiURL = "http://localhost:3000/api/chat/";

export function useChatInput() {
	const initialState = { errors: null };

	async function inputAction(
		prevState: State,
		formData: FormData
	): Promise<State> {
		const file = formData.get("file")
		const prompt = formData.get("prompt")
        const promptText = typeof prompt === "string" ? prompt.trim() : ""
        const hasFile = file instanceof File && file.size > 0


		const data = {
			file,
			promptText,
		};

		const errors: string[] = [];

		if (promptText.length === 0 && !hasFile) {
			errors.push("You must add a reference image or add a prompt");
		}

		if (errors.length > 0) {
			return { errors };
		}

		try {
			const response = await axios.post(apiURL, data);

			if (!response.data.success) {
				return { errors: ["Invalid response from server"] };
			}
			console.log(response.data.result);
			return { errors: null };
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log("Backend error: ", error.response?.data?.message);
				return {
					errors: [error.response?.data?.message],
				};
			} else {
				console.log("Unknown error: ", error);
				return {
					errors: ["Unexpected error"],
				};
			}
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
