import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Home from './components/HomeComponent';
import Book from './components/BooksComponent';
import Login from './components/auth/LoginComponent';
import Register from './components/auth/RegisterComponent';
import SubmitBook from './components/auth/SubmitBookComponent'
import PrivateRoute from './components/privateRoute/privateRoute'

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/post" component={SubmitBook} />
                    <Route exact path="/books" component={Book} />
                </Router>
            </Provider>
        );
    }
}


export default App;