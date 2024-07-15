import React from "react";
import SearchForm from "../components/SearchForm";
import { jobs, jobType } from "../data/jobs";
import JobCardLong from "../components/JobCardLong";
import Layout from "../components/Layout";
import Paginate from "../components/Paginate";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Loader from "../components/Loader";
import Empty from "../components/Empty";

const Job = () => {
  const {
    isLoading,
    jobs,
    page,
    setPage,
    totalPages,
    totalJobs,
    resetFilters,
  } = useGlobalContext();

  return (
    <main>
      <Layout>
        <div
          className="top-part"
          style={{
            backgroundImage:
              "linear-gradient(90.26deg, #0DCAF0 5.71%, #0AA0BE 37.45%, #0DC8EE 78.55%, #07748A 98.26%",
            height: "53px",
          }}
        ></div>
        <SearchForm />
        <section className="container py-5">
          <div className="d-flex gap-2 gap-md-5 align-items-center container">
            <p className="text-secondary fs-6">
              Showing <span>{jobs.length}</span> of <span>{totalJobs}</span>{" "}
              results{" "}
            </p>
            <p>
              <button
                className="btn btn-info text-white"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </p>
          </div>
          {!isLoading && jobs.length < 1 && (
            <Empty height={"200px"} content={"No Job Fits Your Search"} />
          )}
          {isLoading ? (
            <Loader height="400px" />
          ) : (
            jobs.map((job) => {
              return <JobCardLong key={job._id} {...job} />;
            })
          )}
        </section>
        {!isLoading && totalPages > 1 && (
          <div className="container my-1">
            <Paginate
              currentPage={page}
              setCurrentPage={setPage}
              numOfPages={totalPages}
            />
          </div>
        )}
      </Layout>
    </main>
  );
};

export default Job;
