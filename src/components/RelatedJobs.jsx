import React from "react";
import JobCard from "./JobCard";
import { jobs } from "../data/jobs";
const RelatedJobs = ({ similar }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center">
          <h3 className="fs-4 fw-bold">Related Jobs</h3>
          <p className="fs-5 fw-medium">
            Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas
            dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet
            quam commodo est pulvinar vitae.
          </p>
        </div>
        <div className="d-lg-flex flex-wrap align-items-center justify-content-between mt-3">
          {similar.map((job) => {
            return <JobCard key={job._id} {...job} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedJobs;
