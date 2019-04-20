import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';

let host, getHost;
getHost = window.location.hostname.split('.');
if(getHost.length > 1){
    host = getHost[0];
}

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
                <Component {...props} host={host}/>
            </div>
        )
    )}/>
)

export default PublicRoute;