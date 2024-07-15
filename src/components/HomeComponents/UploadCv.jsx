import React from "react";
import guy from "../../assets/guy.png";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";

const UploadCv = () => {
  const token = localStorage.getItem("token");
  return (
    <section className="bg-info-subtle">
      <div className="container  uploadsection">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <h1 className="fw-medium display-6">
              Get Jobs that match your <br /> Qualifications and Skill Set
            </h1>
            <p className="my-4 fs-4 ">
              Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla
              aliquam a. In ac in ornare donec consectetur. Nam semper gravida
              enim dolor velit aliquam ut ac.
            </p>
            {/* <button className="btn btn-info text-white px-3 mt-3 fs-5">
              Upload Your CV
            </button> */}
            <Link to={token ? "/appliedjobs" : "/login"}>
              <MyButton content={"Upload Your CV"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadCv;
