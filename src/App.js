import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './components/utils/setAuthToken'
import store from './components/store';
import { setCurrentUser, logoutUser } from './components/actions/authActions'
import Home from './components/HomeComponent';
import Book from './components/BooksComponent';
import Login from './components/auth/LoginComponent';
import Register from './components/auth/RegisterComponent';
import PrivateRoute from './components/privateRoute/privateRoute'

if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded=jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

    const currentTime=Date.now()
    if(decoded.exp<currentTime){
        store.dispatch(logoutUser());
        window.location.href='/login';
    }
}
class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Switch>
                        <PrivateRoute exact path="/books" component={Book} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}


export default App;