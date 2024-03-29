import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

WebFont.load({
  google: {
    families: ['Jura:300', 'sans-serif']
  }
});

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
