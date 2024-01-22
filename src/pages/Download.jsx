import React, { useState } from "react";

const Download = ({ proyects, categories }) => {
  const handleDownload = (downloadUrl) => {
    window.location.href = downloadUrl; // Redirect to the URL to initiate the download
  };

  // Function to toggle the card's expanded state
  const toggleCardExpand = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? null : index);
  };

  // State to keep track of the expanded card index
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  return (
    <>
      <span className="items-center justify-center text-3xl">
        Componente que permite la descarga de archivos de información geográfica
      </span>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {proyects.map((proyect, index) => (
          <div
            className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-lg"
            key={proyect.id}
          >
            <img
              className="h-48 w-full rounded-t-lg object-cover"
              src={proyect.imageUrl}
              alt=""
            />
            <div className="flex h-full flex-col justify-between p-4">
              <div>
                <h5 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                  {proyect.title}
                </h5>
                <p
                  className={`text-sm text-gray-600 dark:text-gray-300 ${
                    expandedCardIndex === index ? "" : "line-clamp-3"
                  }`}
                >
                  {proyect.description}
                </p>
              </div>
              <div className="mt-4">
                {proyect.description.length > 15 && (
                  <button
                    className="text-slate-500 hover:underline"
                    onClick={() => toggleCardExpand(index)}
                  >
                    {expandedCardIndex === index ? "Leer menos" : "Leer más"}
                  </button>
                )}
              </div>
            </div>
            <div className="mt-auto p-4">
              <button
                className="w-full rounded-lg bg-slate-500 px-4 py-2 text-sm text-white hover:bg-red"
                onClick={() => handleDownload(proyect.shapefileUrl)}
              >
                Descargar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Download;
