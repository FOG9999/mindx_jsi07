import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DemoStateFull from './components/DermoStateFull';
import reportWebVitals from './reportWebVitals';
import Login from './components/Hung/Login';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
