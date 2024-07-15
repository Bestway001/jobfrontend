import React from "react";
import { Link } from "react-router-dom";
import Err from "../assets/rafiki.png";

const Error404 = () => {
  return (
    <section className="container ">
      <div className="row d-flex justify-content-center align-items-center flex-lg-row-reverse p-5 vh-100">
        <div className="col-lg-6">
          <img src={Err} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 text-center text-lg-start">
          <div>
            <h1 className="text-info display-4">OOOps!</h1>
            <h3 className="my-3">Page Not Found</h3>
            <p>This page doesn't exist, we suggest you go back to home</p>
            <Link
              to="/"
              className="btn btn-info text-decoration-none text-white w-75 my-3 fs-5"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
