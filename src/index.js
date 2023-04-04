import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import icon from "./assets/fortune.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// document.querySelector("link[rel-'icon']").href = icon;