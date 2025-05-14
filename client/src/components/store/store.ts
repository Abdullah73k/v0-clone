import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./input-slice";
import pageSlice from "./page-slice";
import chatSlice from "./chat-slice";

const store = configureStore({
	reducer: {
		input: inputSlice.reducer,
		page: pageSlice.reducer,
		chat: chatSlice.reducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
