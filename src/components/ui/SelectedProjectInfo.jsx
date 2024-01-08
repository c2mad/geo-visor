import React from "react";

const SelectedProjectInfo = ({ proyect }) => {
  if (!proyect) {
    return null; // No hay proyecto seleccionado, no mostrar nada
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">{proyect.title}</h2>
      <p className="text-lg font-semibold text-gray-500">Publicación</p>
      <p className="text-base font-normal text-gray-500">
        {proyect.publication}   
      </p>
      {/* Agrega más detalles del proyecto según tus necesidades */}
      <div className="mt-5">
        <p className="text-lg font-semibold text-gray-500">Descargas</p>
        {/* Agrega enlaces de descarga u otra información relevante */}
      </div>
    </div>
  );
};

export default SelectedProjectInfo;
