import React from "react";
import Header from "../components/Header";
import { AllMovies } from "./AllMovies";

const Homepage = ({ category }) => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="container">
          <AllMovies category={category} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
