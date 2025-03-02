import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginSignup.css';

function LoginSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validEmail = 'test@example.com';
  const validPassword = 'mintu7476';

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag
      setError('');
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-signup-wrapper"> 
      <div className="login-signup-container">
        <h2 className="login-signup-title">"Welcome!"</h2>
        
        <form className="login-signup-form" onSubmit={handleLogin}>
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

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-toggle">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;