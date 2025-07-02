import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="footer-container">
      <Row>
        <Col sm>
          <h4>Movies</h4>
          <p>
            <Link to="#">All Movies</Link>
          </p>
          <p>
            <Link to="#">Playing now</Link>
          </p>
          <p>
            <Link to="#">Top Rated</Link>
          </p>
          <p>
            <Link to="#">Upcoming</Link>
          </p>
        </Col>
        <Col sm>
          <h4>Information</h4>
          <p>
            <Link to="#">Technology</Link>
          </p>
          <p>
            <Link to="#">Gift Card</Link>
          </p>
          <p>
            <Link to="#">Bonus Card</Link>
          </p>
          <p>
            <Link to="#">Prices</Link>
          </p>
        </Col>
        <Col sm>
          <h4>Contact Us</h4>
          <p>Berliner str 20</p>
          <p>38118</p>
          <p>Braunschweig</p>
          <p>Phone:number: +49XXXX</p>
        </Col>
        <Col sm>
          <h4>Follow Us</h4>
          <p>
            <Link to="#">Facebook</Link>
          </p>
          <p>
            <Link to="#">Instagram</Link>
          </p>
          <p>
            <Link to="#">Linkedin</Link>
          </p>
          <p>
            <Link to="#">Tik Tok</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
