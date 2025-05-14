import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	messages: string[];
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
		setMessageResponse(state, action: { payload: string }) {
			state.messages.push(action.payload)
		},
		appendUserPrompt(state, action: { payload: string }) {

		}
	},
});

export const chatActions = chatSlice.actions;
export default chatSlice
