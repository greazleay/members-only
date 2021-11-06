import { createContext, useContext } from 'react';
import { useProvideAuth } from '../hooks/useProvideAuth';
import { RouteProps } from 'react-router';
import { AuthProviderInterface } from '../type';

const AuthContext = createContext<AuthProviderInterface>(undefined!);

export const ProvideAuth = ({ children }: RouteProps) => {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

