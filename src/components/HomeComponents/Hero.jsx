import React from "react";
import SearchForm from "../SearchForm";
import { Link } from "react-router-dom";
import MyButton from "../MyButton";

const Hero = () => {
  return (
    <div className="hero-section">
      <div>
        <h1 className="text-white mainfont text-center fw-medium mb-4">
          SECURE JOBS AS AN AMAZING <br /> TALENT!
        </h1>
        <div className="d-none d-lg-block">
          <SearchForm />
        </div>
        <div className="text-center d-lg-none">
          <Link to="/jobs">
            <MyButton content={"Find More Jobs"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
