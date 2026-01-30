import React from "react";
import "./App.css";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import { products } from "./product";

const firstName = "Nidhal";

function App() {
  return (
    <div className="App">
      {/* Hero Section with Greeting */}
      <div className="hero-section">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">
              {firstName ? `Welcome, ${firstName}!` : "Welcome, Guest!"}
            </h1>
            <p className="hero-subtitle">Discover our premium collection</p>

            {/* Conditional rendering: Display profile image only if firstName is provided */}
            {firstName && (
              <div className="profile-wrapper">
                <img
                  src="user.webp"
                  alt="User profile"
                  className="user-image"
                />
                <div className="profile-ring"></div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Products Section */}
      <Container className="products-container">
        <h2 className="section-title">✨ Featured Products ✨</h2>

        <Row className="products-grid">
          {/* Map through all products and create a card for each */}
          {products.map((product, index) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              className="product-col"
            >
              <Card
                className="product-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Badge */}
                <Badge
                  className="product-badge"
                  style={{ backgroundColor: product.color }}
                >
                  {product.badge}
                </Badge>

                {/* Product Image */}
                <div className="image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="image-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>

                {/* Card Body containing product details */}
                <Card.Body className="card-body-custom">
                  {/* Product Name */}
                  <h2 className="product-name">{product.name}</h2>

                  {/* Product Price with styling */}
                  <div className="price-container">
                    <h3
                      className="product-price"
                      style={{ color: product.color }}
                    >
                      ${product.price}
                    </h3>
                    <span className="price-label">Best Price</span>
                  </div>

                  {/* Product Description */}
                  <p className="product-description">{product.description}</p>

                  {/* Call to Action Button */}
                  <button
                    className="btn-add-cart"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}, ${product.color}dd)`,
                    }}
                  >
                    Add to Cart 🛒
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="footer-section">
        <Container>
          <p className="footer-text">
            Made with ❤️ by {firstName || "Anonymous"} | © 2025 Premium Store
          </p>
        </Container>
      </footer>
    </div>
  );
}

// Export the App component
export default App;
