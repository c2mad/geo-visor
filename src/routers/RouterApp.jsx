import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { HomePage } from "pages/HomePage";
import { JoseMapsPage } from "pages/JoseMapsPage";

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
