import { DefaultLayout } from "layouts/DefaultLayout";
import { ContactPage } from "pages/ContactPage";
import { HomePage } from "pages/HomePage";
import { MapsPage } from "pages/MapsPage";
import { ServicesPage } from "pages/ServicesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/mapas" element={<DefaultLayout />}>
          <Route index element={<MapsPage />} />
        </Route>
        <Route path="/servicios" element={<DefaultLayout />}>
          <Route index element={<ServicesPage />} />
        </Route>
        <Route path="/contacto" element={<DefaultLayout />}>
          <Route index element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
