import React from "react";
import "animate.css";
import logo from "../assets/logo.png";
import { ThreeDots } from "react-loader-spinner";

const FallBackLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center animate__animated animate__zoomIn vh-100">
      <div className="d-flex gap-3 align-items-center">
        <img src={logo} width={"250px"} className="object-fit-cover" alt="" />
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#0DCAF0"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default FallBackLoader;
