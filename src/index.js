import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Random from './Cidade';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Random />
  </React.StrictMode>
);
