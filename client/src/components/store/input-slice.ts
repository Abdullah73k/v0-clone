import { createSlice } from "@reduxjs/toolkit";

interface InputState {
	prompt: string;
	uploadedImage: File | null;
	previewURL: string | null;
	isLoading: boolean;
}

const initialState: InputState = {
	prompt: "",
	uploadedImage: null,
	previewURL: null,
	isLoading: false,
};

const inputSlice = createSlice({
	name: "prompt-input",
	initialState,
	reducers: {},
});

export default inputSlice;

export const inputActions = inputSlice.actions;
