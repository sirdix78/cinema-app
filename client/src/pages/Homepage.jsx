import React from "react";
import Header from "../components/Header";
import { AllMovies } from "./AllMovies";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="homepage-container">
        <h1>All movies</h1>
        <AllMovies />
      </div>
    </div>
  );
};

export default Homepage;
