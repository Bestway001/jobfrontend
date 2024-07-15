import React from "react";
import { FaGoogle } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import moment from "moment";
import logo from "../../assets/google.png";

const JobInfo = ({ job }) => {
  return (
    <div className="bg-info-subtle p-4 text-start rounded-4">
      <div className="joblogo">
        <img src={job.logo} style={{ width: "47px", height: "47px" }} alt="" />
      </div>
      <h2 className="fs-3 text-dark mt-2">{job.jobTitle}</h2>
      <p>{job.jobDescription.substring(0, 100)}... </p>
      <div className="mt-3 ">
        <h2 className="fs-5">Job Information</h2>
        <div
          className="bg-white shadow-lg rounded-4 p-3 d-flex flex-column gap-1 card"
          style={{ maxWidth: "280px" }}
        >
          <p className="d-flex gap-2 align-items-center">
            <span>
              <BsFillPersonPlusFill />
            </span>
            <span className="text-dark fw-semibold">Employment Type :</span>
            <span className="text-info text-capitalize">{job.jobType}</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <CiLocationOn />
            </span>
            <span className="text-dark fw-semibold">Location :</span>
            <span className="text-info">{job.location}</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <AiOutlineClockCircle />
            </span>
            <span className="text-dark fw-semibold">Date Posted:</span>
            <span className="text-info">
              {moment(job.createdAt).format("LL")}
            </span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <PiSuitcaseSimpleThin />
            </span>
            <span className="text-dark fw-semibold">Experience:</span>
            <span className="text-info">{job.experience}Years</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <BiDollar />
            </span>
            <span className="text-dark fw-semibold">Salary:</span>
            <span className="text-info">{job.salaryRange}k per annum</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
