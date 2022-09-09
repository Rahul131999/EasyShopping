/**
 * @Author: root
 * @Date:   2022-09-07T17:37:59+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-09T02:56:39+05:30
 */



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import bank from './bank';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from "redux-persist/es/persistStore";

const persistedStore = persistStore(bank);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={bank}>
    <React.StrictMode>
      <PersistGate loading={<div>Processing....</div>} persistor={persistedStore}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
