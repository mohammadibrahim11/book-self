import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           
           <NavLink>
            <Link to='home'>Home</Link>
            <Link to='books'>Books</Link>
            <Link to='about'>About us</Link>
           </NavLink>
        </div>
    );
};

export default Header;