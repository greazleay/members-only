import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/auth';
import SignOut from './SignOut';

export const NavBar = () => {
    const { isAuthenticated } = useAuthContext();

    return (
        <nav className="nav">
            <Link to="/members-only">
                <button>Home</button>
            </Link>
            <Link to="/login">
                <button>Log In</button>
            </Link>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
            {isAuthenticated && <SignOut />}

        </nav>
    )
}