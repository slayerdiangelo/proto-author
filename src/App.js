import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Home from './components/HomeComponent';
import Book from './components/auth/BooksComponent';
import Login from './components/auth/LoginComponent';
import Register from './components/auth/RegisterComponent';
import SubmitBook from './components/auth/SubmitBookComponent'
import { setCurrentUser } from './components/actions/authActions'
import PrivateRoute from './components/privateRoute/privateRoute'

const user = JSON.parse(localStorage.getItem('user'))
if(user){
    store.dispatch(setCurrentUser(user))
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
                        <PrivateRoute exact path="/post" component={SubmitBook} />
                        <PrivateRoute exact path="/books" component={Book} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}


export default App;