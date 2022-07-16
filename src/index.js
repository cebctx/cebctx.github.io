import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import I18n from './lib/I18n';

window.I18n = I18n;

const availablePages = ['home'];

// Get current page if navigating from elsewhere
const url = new URL(window.location.href);
let page = url.searchParams.get('p');
if (!availablePages.includes(page)) {
  page = 'home';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App page={page} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
