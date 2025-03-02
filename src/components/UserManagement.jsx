import React, { useState, useEffect } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '' });
  const [editUser, setEditUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch users from the backend
    fetchUsers();
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

  return (
    <div className="user-management-container">
      <h1 className="user-management-title">
        <span className="user-text">User</span> <span className="management-text">Management</span>
      </h1>
      {error && <p className="error-message">{error}</p>}
      <div className="user-list">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.email})
              <button onClick={() => setEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-user">
      <h2 className="user-management-title">
        <span className="user-text">Add</span> <span className="management-text">user's</span>
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