import React, { useState } from "react";
import categorias from "../../utils/categories";
const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories] = useState(categorias);
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className="w-full px-3" onSubmit={handleSearch}>
      <div className="flex sm:px-0 md:px-3">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          All categories{" "}
          <svg
            className="ml-2.5 h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="search"
            id="search-dropdown"
            className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-rose-500"
            placeholder="Buscar..."
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full rounded-r-lg border border-rose-700 bg-rose-700 p-2.5 text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
