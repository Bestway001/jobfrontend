import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import MyButton from "./MyButton";
import moment from "moment";

const JobCardLong = ({
  _id,
  jobTitle,
  createdAt,
  logo,
  salaryRange,
  companyName,
  mode,
  location,
}) => {
  return (
    <div className="py-3 px-4  my-3 mx-auto">
      <div className="row justify-content-between align-items-center p-3 rounded-3 longjobcard">
        <div className=" col-lg-3 d-flex gap-3 align-items-center">
          <div className="joblogo">
            <img src={logo} style={{ width: "47px", height: "47px" }} alt="" />
          </div>
          <div>
            <h2 className="fw-medium fs-5"> {jobTitle}</h2>
            <h2 className="fs-6"> {companyName} </h2>
          </div>
        </div>

        <div className=" col-lg-3 d-flex  justify-content-lg-center align-items-center mt-2 mt-lg-0">
          <div>
            <p className="d-inline-block text-info bg-info-subtle  px-3 text-capitalize rounded-2 my-3 my-md-1">
              {mode}{" "}
            </p>
            <p className="text-secondary fs-5">
              {" "}
              <span>
                <AiOutlineClockCircle className="text-info" />{" "}
              </span>{" "}
              Posted {moment(createdAt).startOf("hour").fromNow()}{" "}
            </p>
          </div>
        </div>
        <div className=" col-lg-3 d-flex justify-content-lg-center align-items-center flex-lg-column gap-2 gap-lg-0">
          <p className="text-secondary d-flex align-items-center justify-content-center">
            <span className="pb-1 pe-1">
              <CiLocationOn />{" "}
            </span>{" "}
            {location}{" "}
          </p>
          <p className="text-dark"> $ {salaryRange}k </p>
        </div>
        <div className=" col-lg-3 d-flex justify-content-lg-center align-items-start">
          {" "}
          <Link to={`/job/${_id}`}>
            <MyButton content={"Apply Now"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCardLong;
