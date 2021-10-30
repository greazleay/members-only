import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/use-auth';
import SignOut from './SignOut';

export const NavBar = () => {
    const { auth } = useAuth();

    return (
        <nav className="nav">
            <Link to="/members-only">
                <button>Home</button>
            </Link>
            <Link to="/signin">
                <button>Sign In</button>
            </Link>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
            {auth.authToken && <SignOut />}

        </nav>
    )
}