import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ title, aboutText }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');

    // Check if the current route is an admin route
    if (location.pathname.startsWith('/admin')) {
      navigate('/admin/login'); // Navigate to admin login page
    } else {
      navigate('/login'); // Navigate to user login page
    }
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Check if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Conditionally render the brand based on the current route */}
        {isAdminRoute ? (
          <div className="navbar-header">
            <span className="navbar-brand" style={{ color: '#1D8348' }}>Admin Dashboard</span>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon">&#9776;</span>
            </button>
          </div>
        ) : (
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
        {!isAdminRoute ? (
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

            {/* Logout Button */}
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
        ) : (
          <>
            {/* Only show the logout button for admin routes */}
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