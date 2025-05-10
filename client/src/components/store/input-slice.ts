import { createSlice } from "@reduxjs/toolkit";

interface InputState {
	prompt: string;
	uploadedImage: File | null;
	previewURL: string | null;
	isLoading: "loading" | "not-loading";
	framework: "react" | "next";
	tailwind: boolean;
}

const initialState: InputState = {
	prompt: "",
	uploadedImage: null,
	previewURL: null,
	isLoading: "not-loading",
	framework: "next",
	tailwind: false,
};

const inputSlice = createSlice({
	name: "prompt-input",
	initialState,
	reducers: {
		setPrompt(state, action: { payload: string }) {
			state.prompt = action.payload;
		},
		setUploadedImage(state, action: { payload: File | null }) {
			state.uploadedImage = action.payload;
		},
		setPreviewURL(state, action: { payload: string | null }) {
			state.previewURL = action.payload;
		},
		setLoading(state, action: { payload: "loading" | "not-loading" }) {
			state.isLoading = action.payload;
		},
		setFramework(state, action: { payload: "react" | "next" }) {
			state.framework = action.payload;
		},
		toggleTailwind(state) {
			state.tailwind = !state.tailwind;
		},
	},
});

export default inputSlice;

export const inputActions = inputSlice.actions;
