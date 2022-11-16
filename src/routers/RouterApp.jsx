import { DefaultLayout } from "layouts/DefaultLayout";
import { ContactPage } from "pages/ContactPage";
import { HomePage } from "pages/HomePage";
import { JoseMapsPage } from "pages/JoseMapsPage";
import { MapsPage } from "pages/MapsPage";
import { ServicesPage } from "pages/ServicesPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/mapas/jose" element={<DefaultLayout />}>
          {/* <Route index element={<MapsPage />} /> */}
          <Route index element={<JoseMapsPage />} />
        </Route>
        {/* <Route path="/servicios" element={<DefaultLayout />}>
          <Route index element={<ServicesPage />} />
        </Route>
        <Route path="/contacto" element={<DefaultLayout />}>
          <Route index element={<ContactPage />} />
        </Route> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
