import React from "react";
import { FaCheck } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const SuccessModal = ({ showModal, setShowModal }) => {
  return (
    <div className="text-center">
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="text-center p-4 rounded-2"
      >
        <Modal.Body>
          <h2 className="my-4">Application Successfull</h2>
          <FaCheck className="text-white w-25 h-25 bg-info p-2 fw-lighter rounded-circle  my-2" />
          <p className="fs-5 my-1">
            <Link to="/appliedjobs" className="text-decoration-none  text-dark">
              view your applied Job  {">>>"}
            </Link>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SuccessModal;
