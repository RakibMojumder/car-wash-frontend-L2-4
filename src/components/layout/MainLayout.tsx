import useScrollRestoration from "@/hooks/useScrollRestoration";
import SubmitEnquiry from "../home/SubmitEnquiry";
import Testimonial from "../home/Testimonial";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  useScrollRestoration();

  return (
    <div>
      <Navbar />
      <Outlet />
      <Testimonial />
      <SubmitEnquiry />
      <Footer />
    </div>
  );
};

export default MainLayout;
