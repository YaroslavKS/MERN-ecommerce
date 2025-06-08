import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


// Зупинився на тому що не хочу засмічувати цей файл, додав пейджеси, роутери ще не додав, треба може ще якийсь файл винести щоб індекс джс основний був чистий, прописати архітектуру роутерів і подумати як зберегти код чистим 