import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Layout from "../components/Layout";
import MyButton from "../components/MyButton";
import { SuccessModal } from "../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validationSchema } from "../utils/formValidator";



const JobApplication = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = localStorage.getItem("token");
  const { jobId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleJobSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("firstname", data.firstname);
      formData.append("lastname", data.lastname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("cover", data.cover);
      formData.append("file", data.file[0]);

      const response = await axios.post(
        `https://jobme-sam.onrender.com/api/v1/jobs/apply/${jobId}`,
        formData,
        {
          headers: {
            Authorization: ` Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setShowModal(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data);
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Layout>
        <SuccessModal showModal={showModal} setShowModal={setShowModal} />
        <div
          className="bg-info-subtle mx-auto rounded-4"
          style={{ maxWidth: "950px" }}
        >
          <form
            onSubmit={handleSubmit(handleJobSubmit)}
            className="p-4 position-relative"
          >
            <ToastContainer className={"position-absolute"} autoClose={7000} position="bottom-right" />
            <div className="d-flex justify-content-between gap-3 flex-column flex-md-row my-2">
              <div className="w-100">
                <label htmlFor="firstname">*First Name</label>
                <input
                  type="text"
                  id="firstname"
                  className={`form-control shadow-none p-3 rounded-4 ${
                    errors.firstname ? "is-invalid" : ""
                  }`}
                  {...register("firstname")}
                />
                <div className="invalid-feedback">
                  {errors.firstname?.message}
                </div>
              </div>
              <div className="w-100">
                <label htmlFor="lastname">*Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  className={`form-control shadow-none p-3 rounded-4 ${
                    errors.lastname ? "is-invalid" : ""
                  }`}
                  {...register("lastname")}
                />
                <div className="invalid-feedback">
                  {errors.lastname?.message}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between gap-3 flex-column flex-md-row my-3">
              <div className="w-100">
                <label htmlFor="email">*Email Address</label>
                <input
                  type="email"
                  id="email"
                  className={`form-control shadow-none p-3 rounded-4 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  {...register("email")}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="w-100">
                <label htmlFor="phone">*Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className={`form-control shadow-none p-3 rounded-4 ${
                    errors.phone ? "is-invalid" : ""
                  }`}
                  {...register("phone")}
                />
                <div className="invalid-feedback">{errors.phone?.message}</div>
              </div>
            </div>
            <div className="my-3">
              <label htmlFor="cover">*Cover Letter</label>
              <textarea
                className={`w-100 rounded-4 shadow-none form-control ${
                  errors.cover ? "is-invalid" : ""
                }`}
                cols="30"
                rows="10"
                id="cover"
                {...register("cover")}
              ></textarea>
              <div className="invalid-feedback">{errors.cover?.message}</div>
            </div>
            <div className="my-3">
              <label htmlFor="file">*Upload CV/Resume</label>
              <input
                type="file"
                id="file"
                className={`form-control shadow-none form-field ${
                  errors.file ? "is-invalid" : ""
                }`}
                {...register("file")}
              />
              <div className="invalid-feedback">{errors.file?.message}</div>
              <p className="my-3 text-dark fw-medium fs-6">
                File type should not be larger than 12MB. Supported file types:
                doc, docx, pdf.
              </p>
            </div>
            <div className="form-check mb-4">
              <input
                type="checkbox"
                id="agree"
                className={`form-check-input shadow-none ${
                  errors.agree ? "is-invalid" : ""
                }`}
                {...register("agree")}
              />
              <label htmlFor="agree" className="form-check-label">
                I agree to the{" "}
                <span className="text-info fw-semibold">
                  Terms & Conditions
                </span>
              </label>
              <div className="invalid-feedback">{errors.agree?.message}</div>
            </div>
            <MyButton
              content={isSubmitting ? "Applying..." : "Apply now"}
              extraClass={"p-2 rounded-4"}
            />
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default JobApplication;
