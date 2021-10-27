import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from './auth/authContext';
import { useAuth2Context } from './auth/auth2Contect';

export const PrivateRoute = ({ children, ...rest }) => {
    // const { isAuthenticated } = useAuth();
    const { isAuthenticated } = useAuth2Context();

    return (
        <Route {...rest} render={({ location }) =>
            isAuthenticated ? children : <Redirect to={{
                pathname: 'login',
                state: { from: location }
            }} />
        } />
    )
}

