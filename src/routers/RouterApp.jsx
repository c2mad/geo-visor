import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { HomePage } from "pages/HomePage";
import ProyectPage from "pages/ProyectPage";
import { ThemeProvider } from "@material-tailwind/react";
import { JoseMapsPage } from "pages/JoseMapsPage";
import { ContactPage } from "pages/ContactPage";
import { ServicesPage } from "pages/ServicesPage";
import { Switch } from "@headlessui/react";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/mapas/jose" element={<DefaultLayout />}>
            {/* <Route index element={<MapsPage />} /> */}
            <Route index element={<JoseMapsPage />} />
          </Route>
          <Route path="/servicios" element={<DefaultLayout />}>
            <Route index element={<ServicesPage />} />
          </Route>
          <Route path="/contacto" element={<DefaultLayout />}>
            <Route index element={<ContactPage />} />
          </Route>
          <Route path="/proyects">
            <Route index element={<ProyectPage />}></Route>
          </Route>
          <Route path="/proyects/category/:id">
            <Route index element={<ProyectPage />}></Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
