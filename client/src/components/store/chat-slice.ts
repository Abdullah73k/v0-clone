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
	},
});

export const chatActions = chatSlice.actions;
export default chatSlice
