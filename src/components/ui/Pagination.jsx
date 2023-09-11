import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination mt-4 flex justify-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-300 text-gray-600"
            : "bg-blue-500 text-white hover:bg-blue-700"
        }`}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-gray-300 text-gray-600"
            : "bg-blue-500 text-white hover:bg-blue-700"
        }`}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;
