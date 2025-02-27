import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // Get all product data from URL parameters
    const data = {
      id: params.get("id"),
      name: params.get("name"),
      price: params.get("price"),
      image: params.get("image"),
    };

    console.log("Received product data:", data);

    if (data.id && data.name && data.price) {
      setProductData(data);
    }
  }, [location.search]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleRemove = () => {
    navigate("/shop");
  };

  if (!productData) {
    return (
      <Container className="mt-5 text-center">
        <h2>Checkout</h2>
        <Card className="shadow-lg p-3">
          <Card.Body>
            <p style={{ color: "red" }}>
              No product data available. Please select a product from the shop.
            </p>
            <Button variant="primary" onClick={() => navigate("/shop")}>
              Return to Shop
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <>
      <Container className="mt-5 text-center">
        <h2 className="text-success fw-bold">
          Check<span className="text-dark">Out</span>
        </h2>
        <Card className="shadow-lg p-3">
          {productData.image && (
            <div className="text-center mb-3">
              <img
                src={productData.image}
                alt={productData.name}
                style={{
                  maxWidth: "300px",
                  height: "auto",
                  margin: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
          <Card.Body>
            <Card.Title>{productData.name}</Card.Title>
            <p>
              <strong>Price:</strong> {productData.price}
            </p>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <Button
                variant="danger"
                onClick={decreaseQuantity}
                style={{
                  padding: "5px 10px", // Smaller padding
                  fontSize: "0.9rem", // Smaller font size
                  width: "40px", // Fixed width
                  height: "40px", // Fixed height
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                -
              </Button>
              <span>{quantity}</span>
              <Button
                variant="success"
                onClick={increaseQuantity}
                style={{
                  padding: "5px 10px", // Smaller padding
                  fontSize: "0.9rem", // Smaller font size
                  width: "40px", // Fixed width
                  height: "40px", // Fixed height
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                +
              </Button>
            </div>
            <p className="mt-3">
              <strong>Total:</strong> Rs.
              {(parseFloat(productData.price.replace("Rs.", "")) * quantity).toFixed(0)}
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button
                variant="success"
                onClick={() =>
                  navigate("/khalti-payment", {
                    state: {
                      product: productData,
                      quantity: quantity,
                      totalPrice: (
                        parseFloat(productData.price.replace("Rs.", "")) * quantity
                      ).toFixed(0),
                      imageUrl: productData.image, // Pass the image URL here
                    },
                  })
                }
                style={{
                  padding: "5px 10px", // Smaller padding
                  fontSize: "0.9rem", // Smaller font size
                  whiteSpace: "nowrap", // Prevent text from wrapping
                }}
              >
                Proceed to Payment
              </Button>
              <Button
                variant="danger"
                onClick={handleRemove}
                style={{
                  padding: "5px 10px", // Smaller padding
                  fontSize: "0.9rem", // Smaller font size
                  width: "80px", // Fixed width for Remove button
                }}
              >
                Remove
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md={3}>
              <h5>About Us</h5>
              <p>
                We provide high-quality plant-based products that are healthy,
                delicious, and 100% vegan.
              </p>
            </Col>
            <Col md={3}>
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/faq" className="text-white text-decoration-none">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/returns" className="text-white text-decoration-none">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="text-white text-decoration-none">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Shop</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/shop" className="text-white text-decoration-none">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="/new-arrivals" className="text-white text-decoration-none">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="/best-sellers" className="text-white text-decoration-none">
                    Best Sellers
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-envelope"></i> support@plantstore.com
                </li>
                <li>
                  <i className="fas fa-phone"></i> +977 - 9837510538
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Anamnagar, New Baneshwor
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="bg-white" />
          <p className="text-center m-0">
            &copy; {new Date().getFullYear()} Plant-Based Store. All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Checkout;