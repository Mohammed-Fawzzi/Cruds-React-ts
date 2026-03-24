import React from "react";
import Button from "@/components/common/ui/Button.tsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
  setLimit,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);
  return (
    <div className="flex items-center justify-center gap-5 mt-5 w-fit">
      <Button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors cursor-pointer ${currentPage === 1
          ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-300 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500"
          }`}
      >
        <FiChevronLeft className="text-lg" />
        Previous
      </Button>

      {/* Pages */}
      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition ${currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      <Button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors cursor-pointer ${currentPage === 1
            ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-300 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500"
          }`}
      >
        Next
        <FiChevronRight className="text-lg" />
      </Button>

      {/* Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">Show:</span>
        <select
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 focus:outline-none rounded-lg px-2 py-1 text-sm"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
}