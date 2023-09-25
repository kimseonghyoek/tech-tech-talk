import { Store, applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootReducer, { rootSaga } from ".";

import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";


export default function configureStores() {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
  });
  sagaMiddleware.run(rootSaga);
};