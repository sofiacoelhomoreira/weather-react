import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';
import App from './App';
import Moon from './Moon';
import Weather from './Weather';
import Search from './Search';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>

    <div className="border">
    <Moon />
  
    <Search defaultCity="Paris"/>
    <Weather />
    <App />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
