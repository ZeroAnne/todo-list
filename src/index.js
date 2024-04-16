import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 載入context
import { ListProvider } from './hooks/use-list'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ListProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ListProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
