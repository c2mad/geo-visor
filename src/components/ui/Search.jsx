import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto w-full max-w-[1100px] px-3"
    >
      <div className=" flex rounded-md shadow-lg">
        <input
          type="text"
          placeholder="Buscar MAPA"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full rounded-l-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-200 dark:text-black"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
          <svg
            className="h-4 w-4 text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <button
          type="submit"
          className="inline-flex flex-shrink-0 items-center justify-center rounded-r-md border border-transparent bg-red px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-red focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Search;
