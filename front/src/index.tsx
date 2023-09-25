import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStores from './redux/ConfigureStore';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer, { rootSaga } from './redux';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer, 
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
