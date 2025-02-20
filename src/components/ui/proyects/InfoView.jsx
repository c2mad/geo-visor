import categories from "utils/categories";

export default function InfoView({ proyect }) {
  return (
    <div className="border-b border-gray-200 py-5">
      <div className="flex w-full flex-col justify-start">
        <p className="text-lg font-semibold text-gray-500">Titulo</p>
        <h5 className="mb-2 text-md font-medium text-gray-500">
          {proyect.title}
        </h5>
        <div className="text-xs text-neutral-500 dark:text-neutral-300">
          <p className="mb-1 mt-2 text-[14px] font-normal text-gray-400 dark:text-gray-400">
            <span className="font-semibold">{"Publicado: "}</span>
            <span>{proyect.publication}</span>
          </p>
          <p className="mb-1 mt-2 text-[14px] font-normal text-gray-400 dark:text-gray-400">
            <span className="font-semibold">{"Categoría: "}</span>
            {
              categories.find((category) => category.id === proyect.category)
                .name
            }
          </p>
          <p className="mb-1 mt-2 text-[14px] font-normal text-gray-400 dark:text-gray-400">
            <span className="font-semibold">{"Fuente: "}</span>
            {proyect.fuente.map((f) => {
              return (
                <span key={f.id}>
                  {f.name}
                  {proyect.fuente.length > 1 &&
                  proyect.fuente.indexOf(f) + 1 < proyect.fuente.length
                    ? ", "
                    : "."}
                </span>
              );
            })}
          </p>
          <p className="mb-1 mt-2 text-[14px] font-normal text-gray-400 dark:text-gray-400">
            <span className="font-semibold">
              {proyect.autores.length > 1 ? "Autores: " : "Autor: "}
            </span>
            {proyect.autores.map((autor) => (
              <span key={autor.id}>
                {autor.name}
                {proyect.autores.length > 1 &&
                proyect.autores.indexOf(autor) + 1 < proyect.autores.length
                  ? ", "
                  : "."}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {proyect.services &&
          proyect.services.map((service) => (
            <button
              key={service.id}
              type="button"
              className="flex items-center rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
              onClick={() => window.open(service.url, "_blank")}
            >
              <svg
                className="mr-2 h-3.5 w-3.5"
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
              {service.name}
            </button>
          ))}
      </div>
    </div>
  );
}
