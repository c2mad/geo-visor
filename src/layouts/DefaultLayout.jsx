import { Navbar } from "components/ui/Navbar";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div id="outer-container">
      <div id="page-wrap">
        <Navbar />
        <main style={{ scrollBehavior: "smooth" }}>
          <div className=" bg-white dark:bg-gray-900">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
