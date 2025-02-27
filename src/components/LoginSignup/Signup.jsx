import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './LoginSignup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Fake signup process (store credentials in localStorage)
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    setError('');
    navigate('/login'); // ✅ Redirect to login after signup
  };

  return (
    <div className="login-signup-wrapper">
      <div className="login-signup-container">
        <h2 className="login-signup-title">Create an Account</h2>
        
        <form className="login-signup-form" onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        <p className="signup-toggle">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
