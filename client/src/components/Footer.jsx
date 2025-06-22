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
          <p>All Movies</p>
          <p>Playing now</p>
          <p>Top Rated</p>
          <p>Upcoming</p>
        </Col>
        <Col sm>
          <h4>Information</h4>
          <p>Technology</p>
          <p>Gift Card</p>
          <p>Bonus Card</p>
          <p>Prices</p>
        </Col>
        <Col sm>
          <h4> Contact Us</h4>
          <p>Berliner str 20 </p>
          <p>38118</p>
          <p>Braunschweig</p>
          <p>Phone:number: +49XXXX</p>
        </Col>
        <Col sm>
          <h4>Follow Us</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Tik Tok</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
