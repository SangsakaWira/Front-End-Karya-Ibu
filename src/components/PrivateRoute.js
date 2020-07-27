import React from 'react';
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            false ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

const mapStateToProps = (state) =>{

}

export default PrivateRoute;