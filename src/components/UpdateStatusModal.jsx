import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { status } from "../data/jobs";
import { MdClose } from "react-icons/md";
import axios from "axios";

const UpdateStatusModal = ({ id, showModal, setShowModal }) => {
  const token = localStorage.getItem("token");
  const updateJobStatus = async (value) => {
    try {
      const { data } = await axios.patch(
        `https://jobme-sam.onrender.com/api/v1/jobs/${id}`,
        { status: value }, {headers: {Authorization: `Bearer ${token}`}}
      );if (data.success) {
        setShowModal(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="text-center p-4 rounded-2"
        size="md"
      >
        <Modal.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-start fw-bold fs-4">
              Update Your Application Status
            </p>
            <p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-transparent border-0 "
              >
                <MdClose className="text-dark" size={28} />
              </button>
            </p>
          </div>

          <p className="text-start">Only Job seeker can see this!</p>

          {status.map((status) => {
            return (
              <div
                key={status.id}
                style={{ cursor: "pointer" }}
                onClick={() => updateJobStatus(status.value)}
              >
                <div className="d-flex justify-content-start align-items-center gap-3 my-3">
                  <span
                    className={`${status.bg}  text-white rounded rounded-circle d-flex justify-content-center align-items-center`}
                    style={{ width: "25px", height: "25px" }}
                  >
                    {status.icon}
                  </span>
                  <span className="fs-6 fw-bold">{status.content}</span>
                </div>
                <hr />
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateStatusModal;
