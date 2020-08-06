import React from 'react'
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import Navigation from './components/Navigation'
import {connect} from 'react-redux'
// import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import AddItem from './pages/AddItem'
import Checkout from './pages/Checkout'
import EditItem from './pages/EditItem'
import AddUser from './pages/AddUser'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'

const AppRouter = (props) =>{

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

export default connect(MapStateToProps,{})(AppRouter)