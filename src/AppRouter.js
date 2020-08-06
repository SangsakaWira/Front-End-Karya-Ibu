import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Navigation from './components/Navigation'
import {connect} from 'react-redux'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// import PrivateRoute from './components/PrivateRoute'
import {login,loggedIn} from './redux/'

import Home from './pages/Home'
import AddItem from './pages/AddItem'
import Checkout from './pages/Checkout'
import EditItem from './pages/EditItem'
import AddUser from './pages/AddUser'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'

const AppRouter = (props) =>{

    useEffect(()=>{
        // Check for token to keep user logged in
    if (localStorage.getItem('token')) {
        // Set auth token header auth
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000; // to get in milliseconds
        console.log(decoded.exp < currentTime)
        console.log(decoded.exp)
        console.log(currentTime)
        if (decoded.exp < currentTime) {
            // Logout user
            localStorage.clear()
            // Redirect to login
            window.location.href = "./";
        }
        
    }
    },[])

    return(
        <Router>
            <Navigation></Navigation>
            <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/tambah-item" component={AddItem} />
                <PrivateRoute path="/checkout" component={Checkout} />
                <PrivateRoute path="/edit-item/:id" component={EditItem} />
                <PrivateRoute component={AddUser} path="/add-user" exact />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

const MapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.auth
    }
}

export default connect(MapStateToProps,{login})(AppRouter)