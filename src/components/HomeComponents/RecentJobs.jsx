import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";
import Loader from "../Loader";
import axios from "axios";
const RecentJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRecentJobs = async () => {
    try {
      const { data } = await axios(
        "https://jobme-sam.onrender.com/api/v1/jobs/latest"
      );
      setJobs(data.jobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecentJobs();
  }, []);

  if (isLoading) {
    return <Loader height={"300px"} />;
  }
  return (
    <section>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        {jobs.map((job) => {
          return <JobCard key={job._id} {...job} />;
        })}
      </div>
    </section>
  );
};

export default RecentJobs;
