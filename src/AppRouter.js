import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import AddItem from './pages/AddItem'
import Checkout from './pages/Checkout'
import EditItem from './pages/EditItem'
import AddUser from './pages/AddUser'
import Login from './pages/Login'
import Register from './pages/Register'

const AppRouter = () =>{
    return(
        <Router>
            <Navigation></Navigation>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tambah-item" component={AddItem} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/edit-item/:id" component={EditItem} />
                <PrivateRoute component={AddUser} path="/add-user" exact />
                {/* <Route path="/add-user" component={AddUser} /> */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

export default AppRouter