import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './DesktopNavbar.css';

const DesktopNavbar = ({ title, aboutText }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <nav className="desktop-navbar">
      <div className="desktop-navbar-container">
        <Link className="desktop-navbar-brand" to="/" style={{ color: '#1D8348' }}>{title}</Link>

        {/* Menu Items */}
        <ul className="desktop-navbar-nav">
          <li className="desktop-nav-item">
            <Link className="desktop-nav-link" to="/">Home</Link>
          </li>
          <li className="desktop-nav-item">
            <Link className="desktop-nav-link" to="/about">{aboutText}</Link>
          </li>
          <li className="desktop-nav-item">
            <Link className="desktop-nav-link" to="/shop">Shop</Link>
          </li>
          <li className="desktop-nav-item">
            <Link className="desktop-nav-link" to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        {/* Search Bar and Logout Button */}
        <div className="desktop-navbar-actions">
          <form className="desktop-search-form" role="search">
            <input className="desktop-search-input" type="search" placeholder="Search" aria-label="Search" />
            <button className="desktop-search-button" type="submit">Search</button>
          </form>
          {localStorage.getItem('isAuthenticated') && (
            <button 
              onClick={handleLogout} 
              className="desktop-logout-button">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

DesktopNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

export default DesktopNavbar;