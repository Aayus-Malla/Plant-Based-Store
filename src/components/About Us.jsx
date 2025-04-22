import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function AboutUs () {
    const navigate = useNavigate();  // Use navigate hook
  return (
    <>

    {/* Hero Section */}
          <div className="hero-section text-center text-white p-5" style={{ background: "#1D8348" }}>
            <h1 className="fw-bold">About Us</h1> 
          </div>

           
           {/* New Section (Text + Image) */}
      <Container className="mt-5">
        <Row className="align-items-center">
          {/* Left Column: Text Content */}
          <Col md={6}>
            <h2 className="text-success fw-bold text-start ms-0">
              Hey, <span className="text-dark">what's for launch?</span>
            </h2>
            <p className="text-start">
              With a range that’s easy to prepare, with either no artificial colours or flavours and a source of protein and iron, our products are a 
              compromise-free way to include plant-based alternatives into easy weekday meals.
            </p>
            <p className="text-start">
              Our brand is proudly made and owned, providing quality plant-based meals since 2024.
            </p>
            <p className="text-start">
              You can find our products only in our website and which are linked with our company.
            </p>
            <p className='text-start'>
            The Plant Based Store range are also suitable for Vegans and Vegetarians, and contain a source of Zinc and B12. 
            </p>
          </Col>

          {/* Right Column: Image Section */}
          <Col md={6} className="text-center">
            <img src="/images/m13.png" alt="Product 1" className="img-fluid" style={{ width: "200px", marginRight: "10px" }} />
            <img src="/images/m12.png" alt="Product 2" className="img-fluid" style={{ width: "200px", marginRight: "10px" }} />
            <img src="/images/m18.png" alt="Product 3" className="img-fluid" style={{ width: "200px" }} />
          </Col>
        </Row>
      </Container>

        {/* New Section */}
        <Container className="mt-5 text-center bg-success text-white p-5">

        <h2 className="fw-bold">
         <span className="text-warning">Our</span> <span className="text-dark">Journey</span>
        </h2>
 
                <h1 className="fw-bold">2024-2025: As One</h1>
                <p className="lead">
                   Plant Based Store has become popular on 2024 by selling the best plant based products online as well as offline.
                </p>
                <p>
                    Customers can find our products online as well as offline but we prefer to buy online because we have less sellers in the country.
                    When ever the new products arrives, firstly we update it on our website, after that it goes or brings to the store which are afflicated by our 
                    PLANT BASED STORE.
                </p>
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
                        <li><i className="fas fa-map-marker-alt"></i> Kathmandu-09, Battisputali Road</li>
                      </ul>
                    </Col>
                  </Row>
                  <hr className="bg-white" />
                  <p className="text-center m-0">&copy; {new Date().getFullYear()} Plant-Based Store. All rights reserved.</p>
                </Container>
              </footer>
      
      
    </>
  )
}

export default AboutUs;
