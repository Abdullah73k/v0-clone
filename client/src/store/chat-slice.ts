import { createSlice } from "@reduxjs/toolkit";

export type SelectedFile = {
	name: string;
	content: Record<string, string>
} | null

type Message = {
	result: {
		text: string;
		version?: string;
		components: SelectedFile[];
		main: SelectedFile
	};
};



const initialState: {
	messages: Message[];
	currentPrompt: string;
	isLoading: boolean;
	error: string;
	selectedFile: SelectedFile
} = {
	messages: [],
	currentPrompt: "",
	isLoading: false,
	error: "",
	selectedFile: null
};

const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setMessageResponse(state, action: { payload: Message }) {
			state.messages.push(action.payload);
		},
		setSelectedFile(state, action: { payload: SelectedFile }) {
			state.selectedFile = action.payload
		}
	},
});

export const chatActions = chatSlice.actions;
export default chatSlice;
