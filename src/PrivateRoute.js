import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/use-auth';

export const PrivateRoute = ({ children, ...rest }) => {
    const { authToken } = useAuth();

    return (
        <Route {...rest} render={({ location }) =>
            authToken ? children : <Redirect to={{
                pathname: 'signin',
                state: { from: location }
            }} />
        } />
    )
}

