import { Store, applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import rootReducer from ".";

import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";


export default function configureStores() {
  const sagaMiddleware = createSagaMiddleware();
  const store: Store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)));

  return store;
};