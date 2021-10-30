import { createContext, useContext, useState } from 'react';
import { useProvideAuth } from '../hooks/useProvideAuth';

const AuthContext = createContext();

export const ProvideAuth = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={{ auth, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

