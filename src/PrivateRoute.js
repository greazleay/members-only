import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/use-auth';

export const PrivateRoute = ({ children, ...rest }) => {
    // const { isAuthenticated } = useAuth();
    const { auth } = useAuth();

    return (
        <Route {...rest} render={({ location }) =>
            auth.authToken ? children : <Redirect to={{
                pathname: 'signin',
                state: { from: location }
            }} />
        } />
    )
}

