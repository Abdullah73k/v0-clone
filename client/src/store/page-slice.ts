import { createSlice } from "@reduxjs/toolkit";

type PageViewing = "home" | "recents" | "chat";

interface ViewState {
	currentPage: PageViewing;
	activeChatId?: string;
}

const initialState: ViewState = {
	currentPage: "home",
	activeChatId: "",
};

const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		setPage(state, action: { payload: PageViewing }) {
			state.currentPage = action.payload;
		},
	},
});

export default pageSlice;

export const pageActions = pageSlice.actions;
