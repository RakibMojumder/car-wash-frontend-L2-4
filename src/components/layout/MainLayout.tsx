import useScrollRestoration from "@/hooks/useScrollRestoration";
import SubmitEnquiry from "../home/SubmitEnquiry";
import Testimonial from "../home/Testimonial";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import CarHero from "../home/CarHero";
import OurPartners from "../home/OurPartners";

const MainLayout = () => {
  useScrollRestoration();
  return (
    <div>
      <Navbar />
      <Outlet />
      <OurPartners />
      <SubmitEnquiry />
      <CarHero />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default MainLayout;
