import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyButton from "../MyButton";

const JobDescription = ({job}) => {
  return (
    <div>
      {/* <FaCheckCircle className="text-info" /> */}
      <div>
        <h1>Job Description:</h1>
        <p className="fs-5 mt-3">
        {job.jobDescription}
        </p>
        <p className="fs-5">
          Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
          magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac
          elementum vel. Viverra pellentesque risus tristique mauris metus.
          Imperdiet purus nulla mi consequat nulla.
        </p>
      </div>
      <div className="my-3">
        <h1>Duties & Responsibilities:</h1>
        {job.dutiesResponsibilities.map((p, i) => {
          return (
            <p key={i} className="d-flex gap-2 align-items-center fs-5 my-2">
              <FaCheckCircle className="text-info" />
             {p}
            </p>
          );
        })}
      </div>
      <div className="my-3">
        <h1>Skills & Qualifications:</h1>
        {job.skillsQualifications.map((p, i) => {
          return (
            <p key={i} className="d-flex gap-2 align-items-center fs-5 my-2">
              <FaCheckCircle className="text-info" />
              {p}
            </p>
          );
        })}
        <Link to={`/application/${job._id}`}>
          <MyButton content={"Apply Now"} extraClass={"rounded-3 mt-4 fs-5"} />
        </Link>
      </div>
    </div>
  );
};

export default JobDescription;
