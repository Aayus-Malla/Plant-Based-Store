import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ title, aboutText }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isAdmin = localStorage.getItem('isAdmin');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Check if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Conditionally render the brand based on the current route */}
        {!isAdminRoute && (
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
        )}

        {/* Conditionally render menu items based on the current route */}
        {!isAdminRoute && (
          <>
            <div className={`mobile-visible ${isMenuVisible ? 'show' : ''}`}>
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
                {!isHomePage && isAdmin && (
                <li className="desktop-nav-item">
                  <Link className="desktop-nav-link" to="/admin">Admin</Link>
                </li>
                )}
                <li className="nav-item dropdown">
                  <span className="nav-link" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
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
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Search Bar and Button */}
            <div className={`mobile-visible ${isMenuVisible ? 'show' : ''}`}>
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
          </>
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