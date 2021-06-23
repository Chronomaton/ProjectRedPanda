import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
