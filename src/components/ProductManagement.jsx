import React, { useState, useEffect } from 'react';
import './ProductManagement.css';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });
  const [editProduct, setEditProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch products from the backend
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError('Failed to fetch products');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-backend-api.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        fetchProducts();
        setNewProduct({ name: '', price: '', description: '' });
      } else {
        setError('Failed to add product');
      }
    } catch (error) {
      setError('Failed to add product');
    }
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://your-backend-api.com/products/${editProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editProduct),
      });
      if (response.ok) {
        fetchProducts();
        setEditProduct(null);
      } else {
        setError('Failed to edit product');
      }
    } catch (error) {
      setError('Failed to edit product');
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`https://your-backend-api.com/products/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchProducts();
      } else {
        setError('Failed to delete product');
      }
    } catch (error) {
      setError('Failed to delete product');
    }
  };

  return (
    <div className="product-management-container">
      <h1 className="user-management-title">
        <span className="user-text">Product</span> <span className="management-text">Management</span>
      </h1>
      {error && <p className="error-message">{error}</p>}
      <div className="product-list">
        
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => setEditProduct(product)}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-product">
      <h2 className="user-management-title">
        <span className="user-text">Add</span> <span className="management-text">Products</span>
      </h2>
        <form onSubmit={handleAddProduct}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
      {editProduct && (
        <div className="edit-product">
          <h2>Edit Product</h2>
          <form onSubmit={handleEditProduct}>
            <div className="form-group">
              <label htmlFor="edit-name">Name</label>
              <input
                type="text"
                id="edit-name"
                value={editProduct.name}
                onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-price">Price</label>
              <input
                type="number"
                id="edit-price"
                value={editProduct.price}
                onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-description">Description</label>
              <textarea
                id="edit-description"
                value={editProduct.description}
                onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setEditProduct(null)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;