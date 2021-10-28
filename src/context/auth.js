import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContext2 = createContext();

export const AuthContext2Provider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext2.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext2.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext2);

