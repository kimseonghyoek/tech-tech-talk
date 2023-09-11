import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  { user } from "../reducer/user";
// import storage from "redux-persist/lib/storage/session";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";

// const persistConfig: any = {
//   key: "root",
//   storage: storage,
//   whitelist: ["user"],
//   blacklist: [],
// };

const rootReducer = combineReducers({ user });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;