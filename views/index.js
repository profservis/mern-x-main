// views/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/style.css";
import 'react-loading-skeleton/dist/skeleton.css';
import Main from './main.jsx';  // Импортируем новый Main компонент

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />  // Используем Main компонент
  </React.StrictMode>,
);
