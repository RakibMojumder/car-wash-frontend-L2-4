import useScrollRestoration from "@/hooks/useScrollRestoration";
import SubmitEnquiry from "../home/SubmitEnquiry";
import Testimonial from "../home/Testimonial";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  useScrollRestoration();
<<<<<<< HEAD

=======
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
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
