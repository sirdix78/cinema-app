import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container className="footer-container">
      <Row>
        <Col sm>Logo</Col>
        <Col sm>Information</Col>
        <Col sm>Address</Col>
        <Col sm>Contact Us</Col>
      </Row>
    </Container>
  );
};

export default Footer;
