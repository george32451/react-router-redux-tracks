import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='nav-tabs nav-stacked'>
            <ul>
                <li><Link to="/">Tracks</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
