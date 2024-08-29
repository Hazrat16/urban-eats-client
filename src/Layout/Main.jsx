import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Sidebar from "../pages/Shared/Navbar/Sidebar/Sidebar";

const Main = () => {
  const location = useLocation();
  const locationUrl =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");

  return (
    <div>
      {!locationUrl && <Navbar />}
      {!locationUrl && <Sidebar />}
      <Outlet></Outlet>
      {!locationUrl && <Footer />}
    </div>
  );
};

export default Main;
