import React from "react";
import { testimonials } from "../../data/jobs";

const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fs-5 text-info fw-medium">Testimonials</h2>
        <h1 className="fs-1 text-dark mb-5 mt-2">Feedbacks from Clients</h1>
        <div
          className=" d-flex justify-content-between align-items-center gap-4 example "
          style={{ overflowX: "auto" }}
        >
          {testimonials.map((t) => {
            return (
              <div
                key={t.id}
                className="col-12 mx-auto my-3 my-lg-0 bg-body-tertiary card testimonial-card"
              >
                <img src={t.image} className="card-image" alt={t.name} />
                <p className="my-2">{t.testimonial}</p>
                <h3 className="fst-italic text-info fs-4 fw-normal">
                  {t.name}{" "}
                </h3>
                <p className="text-secondary fs-5">{t.location} </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
