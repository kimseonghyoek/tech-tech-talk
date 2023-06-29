import { Action, configureStore } from "@reduxjs/toolkit";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SHOW_ITEM = "SHOW_ITEM";
const HIDE_ITEM = "HIDE_ITEM";

const initState = {
    user: null,
};

const checkItem = (state: boolean = false, action: Action) => {
    switch(action.type) {
        case SHOW_ITEM:
            return state = true;
        case HIDE_ITEM:
            return !state
        default:
            return state
    };
}

export const store = configureStore({
    reducer: { checkItem }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;