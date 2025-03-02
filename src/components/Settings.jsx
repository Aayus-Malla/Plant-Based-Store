import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [profile, setProfile] = useState({ username: '', email: '' });
  const [password, setPassword] = useState({ currentPassword: '', newPassword: '' });
  const [appSettings, setAppSettings] = useState({ theme: 'light', notifications: true });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleAppSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAppSettings({ ...appSettings, [name]: type === 'checkbox' ? checked : value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Add logic to update profile
    setSuccess('Profile updated successfully');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Add logic to change password
    setSuccess('Password changed successfully');
  };

  const handleAppSettingsSubmit = (e) => {
    e.preventDefault();
    // Add logic to update application settings
    setSuccess('Application settings updated successfully');
  };

  return (
    <div className="settings-container">
      <h1 className="user-management-title">
        <span className="user-text">Setting</span> <span className="management-text">'s</span>
      </h1>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <div className="settings-section">
      <h2 className="user-management-title">
        <span className="user-text">Profile</span> <span className="management-text">Settings</span>
      </h2>
        <form onSubmit={handleProfileSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Update Profile</button>
          </div>
        </form>
      </div>

      <div className="settings-section">
      <h2 className="user-management-title">
        <span className="user-text">Change</span> <span className="management-text">Password</span>
      </h2>
        <form onSubmit={handlePasswordSubmit}>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={password.currentPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={password.newPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Change Password</button>
          </div>
        </form>
      </div>

      <div className="settings-section">
      <h2 className="user-management-title">
        <span className="user-text">Application</span> <span className="management-text">Settings</span>
      </h2>
        <form onSubmit={handleAppSettingsSubmit}>
          <div className="form-group">
            <label htmlFor="theme">Theme</label>
            <select
              id="theme"
              name="theme"
              value={appSettings.theme}
              onChange={handleAppSettingsChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="notifications">Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={appSettings.notifications}
              onChange={handleAppSettingsChange}
            />
          </div>
          <div className="button-container">
            <button type="submit">Update Settings</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;