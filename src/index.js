import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
//引入 Provider & store 
import { Provider } from 'react-redux'
import store from './redux/store'
import reportWebVitals from './reportWebVitals';
// 載入context
import { ListProvider } from './hooks/use-list'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
 <ListProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ListProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
