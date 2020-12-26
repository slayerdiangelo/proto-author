import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/HomeComponent'
import Book from './components/BooksComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';



ReactDOM.render(
  <React.StrictMode>
    <Book/>
  </React.StrictMode>,
  document.getElementById('root')
);


