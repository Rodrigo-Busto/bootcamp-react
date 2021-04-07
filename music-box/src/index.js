import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <NavBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);