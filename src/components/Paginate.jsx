import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Paginate = ({ currentPage, setCurrentPage, numOfPages }) => {
  const pageNumbers = [];
  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }
  const buttonStyles = (isDisabled) => ({
    cursor: isDisabled ? "not-allowed" : "pointer",
  });
  // console.log({ currentPage, pageNumbers, numOfPages });
  return (
    <ul className="pagination mx-auto gap-3 w-25 d-flex justify-content-center">
      <li className="page-item">
        <button
          className="page-link rounded-start-pill"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          style={buttonStyles(currentPage === 1)}
        >
          <GrPrevious className="text-secondary" />
        </button>
      </li>

      {pageNumbers.map((p) => {
        return (
          <li key={p} className="page-item flex items-center">
            <button
              onClick={() => setCurrentPage(p)}
              className={` text-secondary page-link ${
                currentPage === p ? "bg-info text-white" : ""
              }`}
            >
              {p}{" "}
            </button>
          </li>
        );
      })}
      <li className="page-item">
        <button
          className={`page-link border rounded-end-pill `}
          disabled={currentPage === numOfPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          style={buttonStyles(currentPage === numOfPages)}
        >
          <GrNext className="text-secondary" />
        </button>
      </li>
    </ul>
  );
};

export default Paginate;
