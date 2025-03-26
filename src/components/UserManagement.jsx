import React, { useState, useEffect } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '' });
  const [editUser, setEditUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [activityLogs, setActivityLogs] = useState([]);

  useEffect(() => {
    // Fetch users and activity logs from the backend
    fetchUsers();
    fetchActivityLogs();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError('Failed to fetch users');
    }
  };

  const fetchActivityLogs = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/activity-logs');
      const data = await response.json();
      setActivityLogs(data);
    } catch (error) {
      setError('Failed to fetch activity logs');
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-backend-api.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        fetchUsers();
        setNewUser({ username: '', email: '' });
      } else {
        setError('Failed to add user');
      }
    } catch (error) {
      setError('Failed to add user');
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://your-backend-api.com/users/${editUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editUser),
      });
      if (response.ok) {
        fetchUsers();
        setEditUser(null);
      } else {
        setError('Failed to edit user');
      }
    } catch (error) {
      setError('Failed to edit user');
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`https://your-backend-api.com/users/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchUsers();
      } else {
        setError('Failed to delete user');
      }
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  const handleSuspendUser = async (userId) => {
    try {
      const response = await fetch(`https://your-backend-api.com/users/${userId}/suspend`, {
        method: 'POST',
      });
      if (response.ok) {
        fetchUsers();
      } else {
        setError('Failed to suspend user');
      }
    } catch (error) {
      setError('Failed to suspend user');
    }
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-management-container">
      <h1 className="user-management-title">
        <span className="user-text">User</span> <span className="management-text">Management</span>
      </h1>
      {error && <p className="error-message">{error}</p>}
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="user-list">
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.username} ({user.email})
              <button onClick={() => setEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <button onClick={() => handleSuspendUser(user.id)}>Suspend</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="add-user">
        <h2 className="user-management-title">
          <span className="user-text">Add</span> <span className="management-text">User</span>
        </h2>
        <form onSubmit={handleAddUser}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>
          <div className="add-user-button-container">
            <button type="submit" className="add-user-button">Add User</button>
          </div>
        </form>
      </div>

      {editUser && (
        <div className="edit-user">
          <h2>Edit User</h2>
          <form onSubmit={handleEditUser}>
            <div className="form-group">
              <label htmlFor="edit-username">Username</label>
              <input
                type="text"
                id="edit-username"
                value={editUser.username}
                onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-email">Email</label>
              <input
                type="email"
                id="edit-email"
                value={editUser.email}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                required
              />
            </div>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setEditUser(null)}>Cancel</button>
          </form>
        </div>
      )}

      
    </div>
  );
};

export default UserManagement;