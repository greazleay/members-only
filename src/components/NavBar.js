import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/login">
                <button>Log In</button>
            </Link>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </nav>
    )
}