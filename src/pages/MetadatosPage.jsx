// import Post from "components/ui/post";
// import React, { useState } from "react";
// import categorias from "../utils/categories";
// import proyectos from "../utils/proyects";

// const MetadatosPage = () => {
//   const [proyects, setProyects] = useState(proyectos);
//   const [categories, setCategories] = useState(categorias);
//   return (
//     <>
//       <div className="mx-auto w-full max-w-[1100px] items-center bg-slate-400 px-3 dark:text-white">
//         {" "}
//         <h1 className="p-4 text-center text-2xl font-semibold dark:text-white">
//           Catalogo de Metadatos
//         </h1>
//         <div className="relative px-4">
//           <input
//             type="search"
//             id="search-dropdown"
//             className="z-20 block w-full rounded-lg border border-gray-500 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-rose-500"
//             placeholder="Buscar..."
//           />
//           <a
//             href="/proyects"
//             type="submit"
//             className="absolute right-0 top-0 h-full rounded-r-lg border border-rose-700 bg-rose-700 p-2.5 text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
//           >
//             <svg
//               className="h-4 w-4"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//             <span className="sr-only">Search</span>
//           </a>
//         </div>
//         <div className="p-4">
//           <Post proyects={proyects.slice(0, 3)} categories={categories}></Post>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MetadatosPage;
