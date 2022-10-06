import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="nav-link-container">
      <div>
        <Link to='/' className="text-secondary text-decoration-none">book-self</Link>
      </div>

      <div  >
        <NavLink>
      
          <Link className='text-secondary m-2 '  to="home">Home</Link>
          <Link className='text-secondary m-2 '  to="books">Books</Link>
          <Link className='text-secondary m-2 '  to="about">About us</Link>

        </NavLink>
      </div>
    </div>
  );
};

export default Header;
