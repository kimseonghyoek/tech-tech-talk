import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStores from './redux/ConfigureStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStores();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
