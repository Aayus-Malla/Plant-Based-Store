import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './HomePage.css';



function HomePage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated'));

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(null);
  };

  if (!isAuthenticated) {
    return null;
  }

  const handleShopNow = () => {
    navigate('/shop');
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-warning"></i>); // Full star
      } else if (i - 0.5 === rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>); // Half star
      } else {
        stars.push(<i key={i} className="far fa-star text-warning"></i>); // Empty star
      }
    }
    return stars;
  };

  const products = [
    { id: 1, name: "Vegan Burger", image: "/images/m5.png.png", rating: 4.5, description: "A delicious vegan burger made with plant-based ingredients." },
    { id: 2, name: "Plant-Based Burger", image: "/images/m6.png", rating: 5, description: "A juicy plant-based burger packed with flavor." },
    { id: 3, name: "Vegan Sausages", image: "/images/m7.png", rating: 4.5, description: "Tasty vegan sausages with plant based perfect for any meal." }
  ];

  const newProducts = [
    { id: 10, name: "Spicy Sausages", image: "/images/m10.png", rating: 5, description: "Spicy vegan sausages with a kick." },
    { id: 11, name: "Cauliflower & Chick Pea Curry", image: "/images/m9.png", rating: 4.7, description: "A hearty curry with cauliflower and chickpeas." },
    { id: 12, name: "Burger Patties", image: "/images/m11.png", rating: 4.7, description: "Burger patties perfect for grilling." }
  ];

  const plantBasedProducts = [
    { id: 7, name: "Plant-Based Burger", image: "/images/m6.png", protein: "15g", description: "A delicious plant-based burger made with healthy ingredients." },
    { id: 8, name: "Vegan Nuggets", image: "/images/m13.png", protein: "12g", description: "Tasty and crunchy vegan nuggets for a healthy snack." },
    { id: 9, name: "Chickpea Salad", image: "/images/m12.png", protein: "18g", description: "A refreshing salad made with chickpeas and fresh veggies." }
  ];

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    setComments([...comments, { id: Date.now(), text: comment }]);
    setComment('');
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((cmt) => cmt.id !== id));
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-center text-white p-5" style={{ background: "#1D8348" }}>
        <h1 className="fw-bold">Welcome to Our Plant-Based Store</h1>
        <p className="lead">Healthy, Delicious & 100% Vegan</p>
        <Button variant="warning" size="sm" className="fw-bold px-4 py-2" onClick={handleShopNow}>
          Shop Now
        </Button>
      </div>

      {/* Featured Products */}
      <Container className="mt-4">
        <h2 className="text-center mb-4">Our Products</h2>
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

      {/* New Section - Similar to the Image */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={5}>
            <h2 className="text-success fw-bold">Hey, <span className="text-dark">Why Choose Plant-Based Products?</span></h2>
            <p>
              Packed with vitamins, minerals, fiber and Low in saturated fats and cholesterol, plant-based foods can help lower the risk of heart disease.
            </p>
            <p>
              High fiber content promotes gut health and aids digestion. Enjoy the taste and texture of traditional meat with our plant-based burgers, sausages, and nuggets—high in protein, free from artificial additives.
            </p>
            <p>
              Join the Plant-Based Revolution!
              Switching to plant-based is a step towards a healthier body and a healthier planet. Discover our range of delicious, nutritious, and environmentally friendly products today!
            </p>
          </Col>
          <Col md={7}>
            {/* Embedded YouTube Video */}
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Vegie Delights - 25g of Protein"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Plant-Based Products Section */}
      <div className="py-5 text-center" style={{ background: "#1D8348" }}>
        <h2 className="fw-bold text-white">OUR <span style={{ color: "#FFF700" }}>PLANT-BASED PRODUCTS</span></h2>
        <Container className="mt-4">
          <Row className="justify-content-center">
            {plantBasedProducts.map((product) => (
              <Col key={product.id} md={4} className="text-center mb-4">
                <div className="position-relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="img-fluid"
                    style={{ maxWidth: "250px", borderRadius: "10px" }}
                  />
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge bg-warning text-dark p-2 rounded-circle"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    {product.protein}
                  </span>
                </div>
                <h5 className="mt-3 text-white">{product.name}</h5>
                <p className="text-white" style={{ maxWidth: "250px", margin: "0 auto" }}>{product.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* New Products Section at the Bottom */}
      <Container className="my-5">
        <h2 className="text-center mb-4">New Arrivals</h2>
        <Row>
          {newProducts.map((product) => (
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

      {/* Comment Section */}
      <Container className="my-5 comment-section">
        <h2 className="text-center mb-4">Leave a Comment</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                className="form-control comment-box"
                rows="3"
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
              <Button type="submit" variant="success" className="mt-3">Post Comment</Button>
            </form>

           {/* Display Comments */}
<div className="mt-4">
  {comments.length > 0 && <h5>Comments:</h5>}
  {comments.map((cmt) => (
    <div key={cmt.id} className="alert alert-light border d-flex justify-content-between align-items-center">
      <span>{cmt.text}</span>
     
    </div>
  ))}
</div>


          
          </Col>
        </Row>
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
}

export default HomePage;