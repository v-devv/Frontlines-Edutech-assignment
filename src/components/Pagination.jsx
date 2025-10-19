import React, { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } =
    useContext(CompanyContext);
  return (
    <div className=" flex items-center justify-between m-auto w-full max-w-80 text-gray-500 font-medium">
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        type="button"
        aria-label="prev"
      >
        <img src="/left.png" className="w-6" alt="" />
      </button>

      <span className="text-sm sm:text-xl">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        type="button"
        aria-label="next"
      >
        <img src="/right.png" className="w-6" alt="" />
      </button>
    </div>
  );
};

export default Pagination;
