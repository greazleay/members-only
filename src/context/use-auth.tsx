import { createContext, useContext } from 'react';
import { useProvideAuth } from '../hooks/useProvideAuth';
import { RouteProps } from 'react-router-dom';
import { AuthProviderInterface } from '../type';

const AuthContext = createContext<AuthProviderInterface>(null!);

export const ProvideAuth = ({ children }: RouteProps) => {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

