import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const OrderSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderDetails, product, quantity, totalPrice } = location.state || {};

    if (!orderDetails) {
        return navigate('/');
    }

    return (
        <Container className="mt-5 mb-5">
            <Card className="shadow-lg p-4">
                <div className="text-center mb-4">
                    <h2 className="text-success">Order Successful!</h2>
                    <p className="text-muted">Thank you for your purchase</p>
                </div>

                <div className="order-details bg-light p-4 rounded">
                    <h4 className="mb-3">Order Details</h4>
                    <p><strong>Order ID:</strong> {orderDetails.id}</p>
                    <p><strong>Product:</strong> {product.name}</p>
                    <p><strong>Quantity:</strong> {quantity}</p>
                    <p><strong>Total Amount:</strong> Rs. {totalPrice}</p>
                    <p><strong>Payment Status:</strong> {orderDetails.status}</p>
                    <p><strong>Payment Date:</strong> {new Date().toLocaleString()}</p>
                </div>

                <div className="text-center mt-4">
                    <Button 
                        variant="primary" 
                        onClick={() => navigate('/shop')}
                        className="me-3"
                    >
                        Continue Shopping
                    </Button>
                    <Button 
                        variant="outline-primary" 
                        onClick={() => window.print()}
                    >
                        Print Receipt
                    </Button>
                </div>
            </Card>
        </Container>
    );
};

export default OrderSuccess;