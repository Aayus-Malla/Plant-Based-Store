import React, { useState, useEffect } from 'react';
import './OrderManagement.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [editOrder, setEditOrder] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Use mock data instead of fetching from the backend
    const mockOrders = [
      { id: 1, status: 'Pending' },
      { id: 2, status: 'Deliverd' },
      { id: 3, status: 'Shipped' },
    ];
    setOrders(mockOrders);
  }, []);

  const handleUpdateOrder = (e) => {
    e.preventDefault();
    const updatedOrders = orders.map((order) =>
      order.id === editOrder.id ? editOrder : order
    );
    setOrders(updatedOrders);
    setEditOrder(null);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div className="order-management-container">
      <h1 className="user-management-title">
        <span className="user-text">Order</span> <span className="management-text">Management</span>
      </h1>
      {error && <p className="error-message">{error}</p>}
      <div className="order-list">
      <h2 className="user-management-title">
        <span className="user-text">Order</span> <span className="management-text">'s</span>
      </h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order {order.id} - {order.status}
              <button onClick={() => setEditOrder(order)}>Edit</button>
              <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {editOrder && (
        <div className="edit-order">
          <h2>Edit Order</h2>
          <form onSubmit={handleUpdateOrder}>
            <div className="form-group">
              <label htmlFor="edit-status">Status</label>
              <input
                type="text"
                id="edit-status"
                value={editOrder.status}
                onChange={(e) => setEditOrder({ ...editOrder, status: e.target.value })}
                required
              />
            </div>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setEditOrder(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;