import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage1 from "../assets/2.jpg";
import ExampleCarouselImage2 from "../assets/bg2.jpg";
import ExampleCarouselImage3 from "../assets/b2.jpg";

const Header = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-80 mx-auto"
          src={ExampleCarouselImage3}
          alt="First slide"
        />
        <div className="carousel-banner">
          <div className="header-subtitle">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p> Ready to watch?</p>
            <p>Enter your email to login or sign up to open a new account!</p>
            <Link to="/login">
              <button className="sign-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="sign-btn">Sign up</button>
            </Link>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-80 mx-auto"
          src={ExampleCarouselImage2}
          alt="Second slide"
        />
        <div className="carousel-banner">
          <div className="header-subtitle">
            <h1>Movie vibes...! ❤️</h1>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-80 mx-auto"
          src={ExampleCarouselImage1}
          alt="Third slide"
        />
        <div className="carousel-banner">
          <div className="header-subtitle">
            <h1>Discover more...! ❤️</h1>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
