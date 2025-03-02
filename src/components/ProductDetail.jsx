import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button, Row, Col  } from "react-bootstrap";



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




// Sample product data with descriptions
const products = [
    { id: 1, name: "Vegan Burger", image: "/images/m5.png.png", price: "Rs. 120", rating: 4.5, description: "A delicious vegan burger made with plant-based ingredients." },
    { id: 2, name: "Plant-Based Burger", image: "/images/m6.png", price: "Rs. 110", rating: 5, description: "A juicy plant-based burger packed with flavor." },
    { id: 3, name: "Vegan Sausages", image: "/images/m7.png", price: "Rs. 80", rating: 4.5, description: "Tasty vegan sausages perfect for any meal." },
    { id: 4, name: "Hot Dogs", image: "/images/m8.png", price: "Rs. 120", rating: 5, description: "Classic hot dogs with a vegan twist." },
    { id: 5, name: "Chick Pea Salad", image: "/images/m12.png", price: "Rs. 400", rating: 5, description: "A flavorful curry made with cauliflower and chickpeas." },
    { id: 6, name: "Vegan Nuggets", image: "/images/m13.png", price: "Rs. 200", rating: 4.5, description: "Crunchy and delicious vegan nuggets." },
    { id: 7, name: "Nut Meat", image: "/images/m15.png", price: "Rs. 230", rating: 5, description: "Nut-based meat alternative rich in protein." },
    { id: 8, name: "Chocolate", image: "/images/m17.png", price: "Rs. 150", rating: 5, description: "Rich and creamy vegan chocolate." },
    { id: 9, name: "Cake", image: "/images/m18.png", price: "Rs. 150", rating: 5, description: "Decadent vegan cake for any occasion." },
    { id: 10, name: "Spicy Sausages", image: "/images/m10.png", price: "Rs. 100", rating: 5, description: "Spicy vegan sausages with a kick." },
    { id: 11, name: "Cauliflower & Chick Pea Curry", image: "/images/m9.png", price: "Rs. 350", rating: 4.7, description: "A hearty curry with cauliflower and chickpeas." },
    { id: 12, name: "Burger Patties", image: "/images/m11.png", price: "Rs. 100", rating: 4.7, description: "Plant-based burger patties perfect for grilling." }
];
  

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <>
    <Container className="mt-5 text-center">
      <Card className="shadow-lg p-3">
        <Card.Img variant="top" src={product.image} alt={product.name} style={{ maxWidth: "300px", height: "auto", display: "block", margin: "0 auto" }} />
        <Card.Body>
          <div>{renderStars(product.rating)}</div>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
          <Card.Text className="fst-italic">{product.description}</Card.Text>
            {/* Add Buy Now buttons */}
          
            
            <Link to={`/checkout?id=${product.id}&name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.image)}`}>
              <Button variant="success">Buy Now</Button>
            </Link>
          
            
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
}

export default ProductDetail;
