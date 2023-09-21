import { Navbar } from "components/ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "components/ui/footer";
export const GeoportalLayaut = () => {
  return (
    <div id="outer-container">
      <div id="page-wrap">
        <Navbar isGeoportal={true} />
        <main style={{ scrollBehavior: "smooth" }}>
          <div className=" bg-white dark:bg-gray-900">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
