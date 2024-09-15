import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useScrollRestoration from "@/hooks/useScrollRestoration";

const AuthLayout = () => {
  useScrollRestoration();
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
