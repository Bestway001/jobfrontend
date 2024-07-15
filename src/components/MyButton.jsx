import React from "react";

const MyButton = ({ content, extraClass }) => {
  return (
    <button
      className={`btn btn-info text-white px-3 mt-3 fs-5 rounded-3 ${extraClass}`}
    >
      {" "}
      {content}{" "}
    </button>
  );
};

export default MyButton;
