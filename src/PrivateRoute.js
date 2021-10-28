import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './context/auth';

export const PrivateRoute = ({ children, ...rest }) => {
    // const { isAuthenticated } = useAuth();
    const { isAuthenticated } = useAuthContext();

    return (
        <Route {...rest} render={({ location }) =>
            isAuthenticated ? children : <Redirect to={{
                pathname: 'login',
                state: { from: location }
            }} />
        } />
    )
}

