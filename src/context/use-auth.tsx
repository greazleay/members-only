import { createContext, useContext } from 'react';
import { useProvideAuth } from '../hooks/useProvideAuth';
import { RouterProps } from 'react-router';

const defaultState = {
    isLoading: false
}

const AuthContext = createContext(defaultState);

export const ProvideAuth = ({ children }: RouterProps) => {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

