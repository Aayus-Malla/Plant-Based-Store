import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import config from "./KhaltiConfig"; // Import Khalti configuration

const KhaltiPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Location State in KhaltiPayment:", location.state); // Debugging line

  if (!location.state) {
    return (
      <Container className="mt-5">
        <Card className="shadow-lg p-3">
          <h2>Error</h2>
          <p>No order details found. Please go back to checkout.</p>
          <button className="btn btn-primary" onClick={() => navigate("/shop")}>
            Return to Shop
          </button>
        </Card>
      </Container>
    );
  }

  const { product, quantity, totalPrice, imageUrl } = location.state;

  // Function to handle Khalti payment
  const handleKhaltiPayment = () => {
    const payload = {
      return_url: "http://localhost:5173/success", // Replace with your success URL
      website_url: "http://localhost:5173", // Replace with your website URL
      amount: totalPrice * 100, // Convert to paisa (Khalti expects amount in paisa)
      purchase_order_id: product.id, // Use product ID or order ID
      purchase_order_name: product.name, // Use product name
    };

    // Initialize Khalti checkout
    const checkout = new window.KhaltiCheckout(config);
    checkout.show({ amount: payload.amount });
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        <Card className="shadow-lg p-4">
          <div className="text-center mb-4">
            <img src={imageUrl} alt="Product" style={{ width: "200px", height: "auto" }} />
          </div>
          <h2 className="text-center mb-4">Payment Details</h2>

          <div className="order-summary mb-4">
            <h4>Order Summary</h4>
            <div className="p-3 bg-light rounded">
              <p>
                <strong>Product:</strong> {product.name}
              </p>
              <p>
                <strong>Quantity:</strong> {quantity}
              </p>
              <p>
                <strong>Total Amount:</strong> Rs. {totalPrice}
              </p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button className="btn btn-success" onClick={() => navigate(-1)}>
              Back to Checkout
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={handleKhaltiPayment}
              style={{
                backgroundColor: "#5C2D91",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease", // Smooth transition for hover effect
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#6a1b9a")} // Darker purple on hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "#5C2D91 ")} // Original color on mouse out
            >
              Pay with Khalti
            </button>
          </div>

          {/* Khalti logo section - Now centered properly */}
          <Row className="my-4">
            <Col className="text-center">
              <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                <img 
                  src="https://th.bing.com/th/id/OIP.LLjh68DtohUqbVgwo3amHQAAAA?rs=1&pid=ImgDetMain"
                  alt="Khalti Logo" 
                  style={{ width: "150px", height: "auto" }}
                />
                <img 
                  src="https://content.sharesansar.com/photos/FEB12/Aug%2010,%202021/Khalti.jpg"
                  alt="Another Image" 
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md={3}>
              <h5>About Us</h5>
              <p>We provide high-quality plant-based products that are healthy, delicious, and 100% vegan.</p>
            </Col>
            <Col md={3}>
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li><a href="/faq" className="text-white text-decoration-none">FAQs</a></li>
                <li><a href="/returns" className="text-white text-decoration-none">Returns</a></li>
                <li><a href="/shipping" className="text-white text-decoration-none">Shipping Info</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Shop</h5>
              <ul className="list-unstyled">
                <li><a href="/shop" className="text-white text-decoration-none">Our Products</a></li>
                <li><a href="/new-arrivals" className="text-white text-decoration-none">New Arrivals</a></li>
                <li><a href="/best-sellers" className="text-white text-decoration-none">Best Sellers</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li><i className="fas fa-envelope"></i> support@plantstore.com</li>
                <li><i className="fas fa-phone"></i> +977 - 9837510538</li>
                <li><i className="fas fa-map-marker-alt"></i> Anamnagar, New Baneshwor</li>
              </ul>
            </Col>
          </Row>
          <hr className="bg-white" />
          <p className="text-center m-0">&copy; {new Date().getFullYear()} Plant-Based Store. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default KhaltiPayment;