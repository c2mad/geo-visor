import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { GeoportalLayaut } from "layouts/GeoportalLayaut";
import { HomePage } from "pages/HomePage";
import ProyectPage from "pages/ProyectPage";
import { ThemeProvider } from "@material-tailwind/react";
import { JoseMapsPage } from "pages/JoseMapsPage";
import { ContactPage } from "pages/ContactPage";
import { ServicesPage } from "pages/ServicesPage";
import { GeoportalPage } from "pages/GeoportalPage";
import Normativa from "pages/NormativaPage";
import GeoservicesPage from "pages/GeoservicesPage";
import { ManualPage } from "pages/ManualPage";
// import MetadatosPage from "pages/MetadatosPage";
import SusceptibilidadMM from "pages/SusceptibilidadMMPage";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route
            path="/geoportal/riesgos/propiedades-geo"
            element={<GeoportalLayaut />}
          >
            {/* <Route index element={<MapsPage />} /> */}
            <Route index element={<JoseMapsPage />} />
          </Route>
          <Route path="/mapas/cedia" element={<GeoportalLayaut />}>
            {/* <Route index element={<MapsPage />} /> */}
            <Route index element={<SusceptibilidadMM />} />
          </Route>
          <Route path="/servicios" element={<DefaultLayout />}>
            <Route index element={<ServicesPage />} />
          </Route>
          <Route path="/contacto" element={<DefaultLayout />}>
            <Route index element={<ContactPage />} />
          </Route>
          <Route path="/proyects" element={<GeoportalLayaut />}>
            <Route index element={<ProyectPage />}></Route>
          </Route>
          <Route path="/proyects/category/:id" element={<GeoportalLayaut />}>
            <Route index element={<ProyectPage />}></Route>
          </Route>
          <Route path="/geoportal" element={<GeoportalLayaut />}>
            <Route index element={<GeoportalPage />}></Route>
          </Route>
          <Route
            path="/geoportal/riesgos/susceptibilidad-mm"
            element={<GeoportalLayaut />}
          >
            <Route index element={<SusceptibilidadMM />}></Route>
          </Route>
          <Route path="/normativa" element={<DefaultLayout />}>
            <Route index element={<Normativa />}></Route>
          </Route>
          <Route path="/geoservicios" element={<DefaultLayout />}>
            <Route index element={<GeoservicesPage />}></Route>
          </Route>
          <Route path="/manual" element={<DefaultLayout />}>
            <Route index element={<ManualPage />}></Route>
          </Route>
          {/* <Route path="/metadatos" element={<DefaultLayout />}>
            <Route index element={<MetadatosPage />}></Route>
          </Route> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
