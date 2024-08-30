import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import New from './New.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <New/>
    <h2>hello from inside render</h2>
  </React.StrictMode>
);


