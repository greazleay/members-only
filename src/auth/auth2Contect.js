import { createContext, useContext, useState } from 'react';

const Auth2Context = createContext();

export const Auth2ContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <Auth2Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </Auth2Context.Provider>
    );
};

export const useAuth2Context = () => useContext(Auth2Context);