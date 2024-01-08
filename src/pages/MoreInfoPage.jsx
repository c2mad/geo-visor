import ProjectDetails from "components/ui/ProjectDetails";
import React, { useState, useEffect } from "react";

export const MoreInfoPage = () => {
  return (
    <>
      <div>
        <h1>Detalles del Proyecto</h1>
        <ProjectDetails /* Pasa los detalles del proyecto como propiedades */ />
      </div>
    </>
  );
};
