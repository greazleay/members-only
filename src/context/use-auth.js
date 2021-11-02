import { createContext, useContext } from 'react';
import { useProvideAuth } from '../hooks/useProvideAuth';

const AuthContext = createContext();

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

