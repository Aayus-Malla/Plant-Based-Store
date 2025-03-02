import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-sections">
        <div className="admin-dashboard-section">
          <h2>Overview</h2>
          {/* Add overview content here */}
        </div>
        <div className="admin-dashboard-section">
          <h2>User Management</h2>
          <Link to="/admin/user-management">Manage Users</Link>
        </div>
        <div className="admin-dashboard-section">
          <h2>Product Management</h2>
          <Link to="/admin/product-management">Manage Products</Link>
        </div>
        <div className="admin-dashboard-section">
          <h2>Order Management</h2>
          <Link to="/admin/order-management">Manage Orders</Link>
        </div>
        <div className="admin-dashboard-section">
          <h2>Settings</h2>
          <Link to="/admin/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;