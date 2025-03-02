import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './DesktopNavbar.css';

const DesktopNavbar = ({ title, aboutText }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
          <li className="desktop-nav-item dropdown">
            <span className="desktop-nav-link" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
              Categories &#9662;
            </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/categories/burger">Burger</Link></li>
                <li><Link className="dropdown-item" to="/categories/sausages">Sausages</Link></li>
                <li><Link className="dropdown-item" to="/categories/chocolate">Chocolate</Link></li>
                <li><Link className="dropdown-item" to="/categories/cake">Cake</Link></li>
                <li><Link className="dropdown-item" to="/categories/hot-dogs">Hot Dogs</Link></li>
                <li><Link className="dropdown-item" to="/categories/cauliflower-chickpea-curry">Cauliflower & Chick Pea Curry</Link></li>
                <li><Link className="dropdown-item" to="/categories/vegan-nuggets">Vegan Nuggets</Link></li>
                <li><Link className="dropdown-item" to="/categories/nut-meat">Nut Meat</Link></li>
                <li><Link className="dropdown-item" to="/categories/chick-pea-salad">Chick Pea Salad</Link></li>
              </ul>
            )}
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