import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page

    // Fake email and password for testing
    const fakeEmail = 'test@example.com';
    const fakePassword = '12345';

    if (email === fakeEmail && password === fakePassword) {
      localStorage.setItem('isAuthenticated', 'true'); // Save login session
      window.location.href = '/home'; // Redirect to HomePage
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '8px' }}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '8px' }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
