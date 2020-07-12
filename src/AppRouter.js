import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'

import Home from './pages/Home'
import AddItem from './pages/AddItem'
import Checkout from './pages/Checkout'
import EditItem from './pages/EditItem'

const AppRouter = () =>{
    return(
        <Router>
            <Navigation></Navigation>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tambah-item" component={AddItem} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/edit-item" component={EditItem} />
            </Switch>
        </Router>
    )
}

export default AppRouter