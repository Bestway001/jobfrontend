import React from "react";
import ContactForm from "../components/contactComponents/ContactForm";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import Layout from "../components/Layout";
const info = [
  {
    icon: <LuPhoneCall />,
    heading: "Call Us",
    content: "lorem ipsum dolor aventica amet",
    main: "+44567890239",
  },
  {
    icon: <CiMail />,
    heading: "Email Us",
    content: "lorem ipsum dolor aventica amet",
    main: "comando22@gmail.com",
  },
  {
    icon: <AiOutlineClockCircle />,
    heading: "Location",
    content: "lorem ipsum dolor aventica amet",
    main: "23 shinghai street Lagos, Nigeria",
  },
];

const Contact = () => {
  return (
    <section>
      <Layout>
        <div className="d-flex justify-content-center align-items-center contacthero">
          <div className="text-white text-center">
            <h2 className="fs-1">Get In Touch With Us</h2>
            <p className="fs-5">We want to hear from you</p>
          </div>
        </div>
        <div className="position-relative container" style={{ top: "-40px" }}>
          <ContactForm />
        </div>
        <div className="my-5">
          <div className="container">
            <div className="row align-content-center justify-content-between">
              {info.map((item, index) => {
                const { icon, heading, content, main } = item;
                return (
                  <div className="col-lg-4 my-3 my-md-0 mx-auto">
                    <div
                      className="shadow py-5 pb-5 rounded-4 text-center"
                      style={{ height: "266px" }}
                    >
                      <div
                        className="rounded-circle bg-info-subtle p-4 fs-3 text-info mx-auto d-flex align-items-center justify-content-center"
                        style={{ width: "100px", height: "100px" }}
                      >
                        {" "}
                        {icon}{" "}
                      </div>
                      <h2 className="fs-4 mt-2">{heading} </h2>
                      <p className="mb-0 fs-6">{content} </p>
                      <p className="text-info">{main} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Contact;
