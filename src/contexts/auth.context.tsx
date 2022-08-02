import { createContext, useContext, ReactNode } from 'react';
import { useAuthProvider } from '../hooks/auth.state';
import { AuthProviderInterface } from '../interfaces/auth.interface';

const AuthContext = createContext<AuthProviderInterface>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useAuthProvider();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
