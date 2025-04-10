import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-subtitle">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Link to="/signup">
          <button className="sign-btn">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
