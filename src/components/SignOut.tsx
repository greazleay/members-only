import React from 'react';
import { useAuth } from '../context/use-auth';
import { Link } from 'react-router-dom';

const SignOut = () => {
    const { logout } = useAuth();
    const handleSignOut = async () => {
        await logout();
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