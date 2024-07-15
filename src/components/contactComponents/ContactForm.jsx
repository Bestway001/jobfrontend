import React from "react";
import MyButton from "../MyButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactschema } from "../../utils/formValidator";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactschema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };
  return (
    <div
      className="bg-info-subtle mx-auto rounded-4"
      style={{ maxWidth: "950px" }}
    >
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-between gap-3 flex-column flex-md-row my-2">
          <div className="form-group w-100">
            <input
              type="text"
              placeholder="Name*"
              className={`form-control shadow-none p-3 rounded-4 ${
                errors.name ? "is-invalid" : ""
              }`}
              {...register("name")}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          <div className="form-group w-100">
            <input
              type="email"
              placeholder="Email*"
              className={`form-control shadow-none p-3 rounded-4 ${
                errors.email ? "is-invalid" : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between gap-3 flex-column flex-md-row my-3">
          <div className="form-group w-100">
            <input
              type="tel"
              placeholder="Phone Number*"
              className={`form-control shadow-none p-3 rounded-4 ${
                errors.phoneNumber ? "is-invalid" : ""
              }`}
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <div className="invalid-feedback">
                {errors.phoneNumber.message}
              </div>
            )}
          </div>
          <div className="form-group w-100">
            <input
              type="text"
              placeholder="Subject*"
              className={`form-control shadow-none p-3 rounded-4 ${
                errors.subject ? "is-invalid" : ""
              }`}
              {...register("subject")}
            />
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject.message}</div>
            )}
          </div>
        </div>
        <div className="my-3">
          <textarea
            placeholder="Message*"
            className={`w-100 rounded-4 shadow-none form-control ${
              errors.message ? "is-invalid" : ""
            }`}
            cols="30"
            rows="10"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>
        <MyButton content={"Send Message"} extraClass={"w-100 p-2 rounded-4"} />
      </form>
    </div>
  );
};

export default ContactForm;
