export const GDowloand = ({ enabled, setEnabled, to }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <div className="inline-flex items-center rounded-xl bg-rose-700 px-1.5 py-1.5 text-center text-sm  text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
        <svg
          className=" h-3.5 w-6.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 19"
        >
          <path
            stroke="currentColor"
            d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
          />
        </svg>
      </div>
    </a>
  );
};
