import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/use-auth';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { authToken } = useAuth();
    let location = useLocation();

    if (!authToken) return <Navigate to="/signin" state={{ from: location }} /> 
    
    return children
}

