import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function BurgerCategory() {
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-warning"></i>);
      } else if (i - 0.5 === rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-warning"></i>);
      }
    }
    return stars;
  };

  // Filtered product data for the Burger category
  const products = [
    { id: 1, name: "Vegan Burger", image: "/images/m5.png.png", rating: 4.5, description: "A delicious vegan burger made with plant-based ingredients." },
    { id: 2, name: "Plant-Based Burger", image: "/images/m6.png", rating: 5, description: "A juicy plant-based burger packed with flavor." },
    { id: 12, name: "Burger Patties", image: "/images/m11.png", rating: 4.7, description: "Plant-Based Burger patties perfect for grilling." }
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
      <span style={{ color: '#1D8348' }}>Burger</span> <span style={{ color: 'black' }}>Products</span>
      </h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <div>{renderStars(product.rating)}</div>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-dark">{product.description}</Card.Text>
                
                <Button variant="success" onClick={() => navigate(`/product/${product.id}`)}>
                  View Product
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BurgerCategory;