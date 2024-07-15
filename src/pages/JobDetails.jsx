import React, { useState, useEffect } from "react";
import { RelatedJobs } from "../components";
import {
  Map,
  JobDescription,
  JobInfo,
} from "../components/JobDetailsComponent";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [similar, setSimilar] = useState([]);

  const getJobDetails = async () => {
    setIsLoading(true);
    const { data } = await axios(
      `https://jobme-sam.onrender.com/api/v1/jobs/${jobId}`
    );
    setIsLoading(false);
    setJob(data.job);
    setSimilar(data.similarJobs);
  };
  useEffect(() => {
    getJobDetails();
  }, [jobId]);
  return (
    <div>
      <Layout>
        {isLoading && <Loader height={"300px"} />}
        <div className="container mb-5">
          <div className="row gap-5">
            <div className="col-lg-5">
              <div>{!isLoading && <JobInfo job={job} />}</div>
              <div className="mt-4 d-block">
                {!isLoading && <Map location={job.location} />}
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-md-0">
              {!isLoading && <JobDescription job={job} />}
            </div>
          </div>
        </div>
        {!isLoading && similar.length > 0 && <RelatedJobs similar={similar} />}
      </Layout>
    </div>
  );
};

export default JobDetails;
