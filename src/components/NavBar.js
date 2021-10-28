import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
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
            <Link to="/page-one">
                <button>Page 1</button>
            </Link>
            <Link to="/page-two">
                <button>Page 2</button>
            </Link>
        </nav>
    )
}