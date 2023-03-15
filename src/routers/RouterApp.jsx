import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { HomePage } from "pages/HomePage";
import { MapsPage } from "pages/MapsPage";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/mapas/geo-visor" element={<DefaultLayout />}>
          <Route index element={<MapsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
