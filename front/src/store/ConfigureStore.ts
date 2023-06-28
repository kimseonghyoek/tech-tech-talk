import { configureStore } from "@reduxjs/toolkit";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const initState = {
    user: null,
}

const store = configureStore({
    reducer: {

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;