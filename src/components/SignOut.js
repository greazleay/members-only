import React from 'react';
import { useAuthContext } from '../context/auth';
import { Link } from 'react-router-dom';
import auth from '../lib/auth';

const SignOut = () => {
    const { setIsAuthenticated } = useAuthContext();
    const handleSignOut = () => {
        auth.logout();
        setIsAuthenticated(false);
    }
    return (
        <>
            <Link to="/page-one">
                <button>Page 1</button>
            </Link>
            <Link to="/page-two">
                <button>Page 2</button>
            </Link>
            <button onClick={handleSignOut}>Sign Out</button>
        </>
    );
}

export default SignOut;