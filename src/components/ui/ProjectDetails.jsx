// ProjectDetails.js

import React from "react";
import proyects from "utils/proyects";

const ProjectDetails = ({ projectId }) => {
  // Encuentra el proyecto específico según el ID
  const project = proyects.find((p) => p.id === projectId);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  // Muestra los detalles del proyecto
  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      {/* Agrega aquí más detalles según sea necesario */}
    </div>
  );
};

export default ProjectDetails;
