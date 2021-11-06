import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from './context/use-auth';

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
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

