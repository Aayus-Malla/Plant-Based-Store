import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ title, aboutText }) => {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand and Three-Dot Button */}
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" style={{ color: '#1D8348' }}>{title}</Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon">&#9776;</span>
          </button>
        </div>

       

        {/* Menu Items (Home, About Us, Shop, Contact Us) */}
        <div className="mobile-visible">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

         {/* Search Bar and Button */}
         <div className="mobile-visible">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

        

        {/* Hidden Menu (Logout Button in a Container) */}
        {isMenuVisible && (
          <div className="logout-container">
            <button 
              onClick={handleLogout} 
              className="btn btn-danger">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

export default Navbar;