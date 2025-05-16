import { useActionState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { pageActions } from "@/components/store/page-slice";
import { chatActions } from "@/components/store/chat-slice";
import axios from "axios";
import { convertFileToBase64 } from "@/lib/convert-image";

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

		const base64Image =
			file instanceof File ? await convertFileToBase64(file) : "";

		try {
			const formDataToSend = new FormData();
			formDataToSend.append("prompt", promptText);
			if (hasFile && base64Image) formDataToSend.append("image", base64Image);

			const response = await axios.post(apiURL, formDataToSend, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			const object = response.data;
			console.log(object);
			
			dispatch(pageActions.setPage("chat"));
			dispatch(chatActions.setMessageResponse(object));
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.error(
					"Backend error, could not get LLM response:",
					error.response?.data
				);
				return { errors: [error.response?.data] };
			} else {
				console.error("Unexpected error:", error);
				return { errors: ["Unexpected error occurred"] };
			}
		}

		return { errors: null };
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
