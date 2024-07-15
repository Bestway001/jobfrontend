import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/MyButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerschema } from "../utils/formValidator";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const redirect = useNavigate;
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const toggleShow2 = () => {
    setShow2(!show2);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerschema),
  });
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    // Handle form submission
    try {
      const { data: result } = await axios.post(
        "https://jobme-sam.onrender.com/api/v1/register",
        data
      );
      setIsSubmitting(false);
      if (result.success) {
        redirect("/login");
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <div className="registerform d-flex align-items-center justify-content-center vw-100 vh-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-4 bg-white p-4 p-lg-5 position-relative"
      >
        <ToastContainer autoClose={7000} />
        <Link to="/" className="d-block mx-auto text-center my-2">
          <img src={logo} alt="Logo" style={{ width: "120px" }} />
        </Link>
        <h2 className="text-center fs-4">Sign Up!</h2>
        <p className="text-center fs-3 mb-3">Register to hit your dream job!</p>
        <input
          type="text"
          placeholder="First Name"
          className={`rounded-4 shadow-none form-control mx-auto my-3 text-dark border-1 border-secondary p-3 ${
            errors.firstName ? "is-invalid" : ""
          }`}
          {...register("firstName")}
        />
        {errors.firstName && (
          <div className="invalid-feedback">{errors.firstName.message}</div>
        )}

        <input
          type="text"
          placeholder="Last Name"
          className={`rounded-4 shadow-none form-control mx-auto my-3 text-dark border-1 border-secondary p-3 ${
            errors.lastName ? "is-invalid" : ""
          }`}
          {...register("lastName")}
        />
        {errors.lastName && (
          <div className="invalid-feedback">{errors.lastName.message}</div>
        )}

        <input
          type="email"
          placeholder="Email Address"
          className={`rounded-4 shadow-none form-control mx-auto my-3 text-dark border-1 border-secondary p-3 ${
            errors.email ? "is-invalid" : ""
          }`}
          {...register("email")}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}

        <div className="position-relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className={`rounded-4 shadow-none form-control mx-auto my-3 text-dark border-1 border-secondary p-3 ${
              errors.password ? "is-invalid" : ""
            }`}
            {...register("password")}
          />
          <button
            type="button"
            onClick={toggleShow}
            className="bg-transparent border-0 text-secondary position-absolute eye"
          >
            {show ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <div className="position-relative">
          <input
            type={show2 ? "text" : "password"}
            placeholder="Confirm Password"
            className={`rounded-4 shadow-none form-control mx-auto my-3 text-dark border-1 border-secondary p-3 ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
            {...register("confirmPassword")}
          />
          <button
            type="button"
            onClick={toggleShow2}
            className="bg-transparent border-0 text-secondary position-absolute eye"
          >
            {show2 ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {errors.confirmPassword && (
            <div className="invalid-feedback">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center mx-auto my-3 check">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <input type="checkbox" className="form-check-input shadow-none" />
            <span className="pt-2">Remember Me</span>
          </div>
        </div>
        <MyButton
          content={isSubmitting ? "Signing up....." : "Sign Up"}
          extraClass={"submitbtn mx-auto d-block w-100"}
        />

        <div className="mt-3 text-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="btn-link text-info text-decoration-none ms-2"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
