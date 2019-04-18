import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <div>
                <Navbar />
                <Component {...props} />
            </div>
        )
    )}/>
)

export default PublicRoute;