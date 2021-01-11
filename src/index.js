import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/HomeComponent';
import Book from './components/BooksComponent';
import Login from './components/auth/LoginComponent';
import Register from './components/auth/RegisterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';



ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


