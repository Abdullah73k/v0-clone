import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	messages: [],
    currentPrompt: "",
    isLoading: false,
    error: "",


};

const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {},
});


export const chatActions = chatSlice.actions
