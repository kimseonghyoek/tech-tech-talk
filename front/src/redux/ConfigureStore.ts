import { Store, configureStore } from "@reduxjs/toolkit";
import rootReducer from ".";

export default function configureStores() {
  const store: Store = configureStore({
    reducer: rootReducer
  });

  return store;
};