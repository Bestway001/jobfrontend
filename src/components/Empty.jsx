import React from "react";

const Empty = ({ height, content }) => {
  return (
    <div
      style={{ height }}
      className="d-flex justify-content-center align-items-center my-3"
    >
      <h2 className="text-dark text-center display-5">{content}</h2>
    </div>
  );
};

export default Empty;
