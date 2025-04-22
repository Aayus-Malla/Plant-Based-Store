import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function ContactUs() {
  return (
    <>

          {/* Hero Section */}
          <div className="hero-section text-center text-white p-5" style={{ background: "#1D8348" }}>
            <h1 className="fw-bold">Contact</h1>
            <p className="lead">Healthy, Delicious & 100% Vegan</p>
          </div>


    <div className="container mt-5">
      <h2 className="text-success fw-bold">CONTACT US</h2>
      <div className="p-4 border rounded bg-light">
        <form>
          <div className="row mb-3">
            <div className="col-6">
              <input type="text" className="form-control w-100" placeholder="First Name" />
            </div>
            <div className="col">
              <input type="text" className="form-control w-100" placeholder="Last Name" />
            </div>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control w-100" placeholder="Address 1" />
          </div>

          <div className="mb-3">
            <input type="text" className="form-control w-100" placeholder="Address 2" />
          </div>

          <div className="mb-3">
            <input type="text" className="form-control w-100" placeholder="City" />
          </div>

          <div className="mb-3">
            <input type="email" className="form-control w-100" placeholder="Email Address" />
          </div>

          <div className="mb-3">
            <input type="email" className="form-control w-100" placeholder="Confirm Email Address" />
          </div>

          <div className="mb-3">
            <textarea className="form-control w-100" placeholder="Question or Feedback" rows="4"></textarea>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="subscribe" />
            <label className="form-check-label" htmlFor="subscribe">
              I would like to receive electronic communications (such as email) from Plant Based Store
            </label>
          </div>

          <button type="submit" className="btn btn-success w-20 fw-bold">
            SUBMIT
          </button>
        </form>
      </div>
    </div>

            {/* New Section */}
            <Container className="mt-5 text-center bg-success text-white p-5">
    
                  <h2 className="fw-bold">
                   <span className="text-warning">We'd</span> <span className="text-dark"> love to hear from you</span>
                  </h2>
     
                    <h1 className="fw-bold text-dark">2024-2025: As One</h1>
                    <p className="lead">
                    For more information about our products or If you are not completely satisfied with the quality of our products, please contact our customer relations team of PLANT BASED STORE.
                    </p>
                    
                    <p className="text-dark fw-bold">
                    E-mail: support@plantstore.com
                    </p>
                    <p className="text-dark fw-bold">
                    Address: Kathmandu-09, Battisputali Road
                    Near Nepal Limited Bank, From there around 1 minutes.
                    </p>
                    <p className="text-dark fw-bold">
                    Phone No: +977 - 9837510538
                    </p>
                    <p className="text-dark fw-bold">
                    Hours: Monday - Friday (11:00 AM - 5:OO PM)
                    </p>
                    <p className="text-dark fw-bold">
                    Friday (11:00 AM - 4:00 PM)
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
  );
}

export default ContactUs;
