import React from "react";
import how from "../../assets/how.png";
import howm from "../../assets/howm.png";
import RecentJobs from "./RecentJobs";

const HowItWorks = () => {
  return (
    <section>
      <div className="howitworks container py-5">
        <div className="mt-lg-5 d-block d-xl-none">
          <h1 className="text-center fw-medium">How it works</h1>
          <div className="my-2">
            <img
              src={howm}
              alt="How it works"
              className=" mx-auto d-block img-fluid"
            />
          </div>
        </div>
        <div className="mt-lg-5 d-none d-xl-block">
          <h1 className="text-center fw-medium">How it works</h1>
          <div className="text-center mx-auto my-5 ">
            <img src={how} alt="How it works" />
            <div className="row mt-3">
              <div className="col-3 fs-5 fw-bold">Create an account/Log In</div>
              <div className="col-3 fs-5 fw-bold">Complete your profile</div>
              <div className="col-3 fs-5 fw-bold">Find best Jobs & Talents</div>
              <div className="col-3 fs-5 fw-bold">
                Apply for Jobs/Hire Talents
              </div>
            </div>
          </div>
        </div>
        <div className="mt-lg-5">
          <h1 className="text-center fw-medium mt-5">Latest Job Listings</h1>
          <p className="text-center mt-3 fw-medium fs-5">
            Lorem ipsum dolor sit amet consectetur. Augue lacus senectus at amet
            viverra ultrices eget. Tincidunt tristique viverra facilisis arcu
            non nulla faucibus. blandit nunc lobortis pretium. Tempus viverra
            vitae nisl imperdiet auctor mattis viverra egestas mattis.Tincidunt
            tristique viverra facilisis arcu
          </p>
        </div>
        <div className="mt-3">
          <RecentJobs />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
