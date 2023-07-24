import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../util/Combine";

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export default store;