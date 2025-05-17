import { createSlice } from "@reduxjs/toolkit";

type Message = {
	result: {
		text: string;
		version?: string;
		files: {
			path: string;
			content: Record<string, string>;
		}[];
	};
};

const initialState: {
	messages: Message[];
	currentPrompt: string;
	isLoading: boolean;
	error: string;
} = {
	messages: [],
	currentPrompt: "",
	isLoading: false,
	error: "",
};

const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setMessageResponse(state, action: { payload: Message }) {
			state.messages.push(action.payload);
		},
	},
});

export const chatActions = chatSlice.actions;
export default chatSlice;
