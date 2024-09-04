import AboutUs from "@/components/home/AboutUs";
import CarDetailing from "@/components/home/CarDetailing";
import Header from "@/components/home/Header";
import OnlineBooking from "@/components/home/OnlineBooking";
import Services from "@/components/home/Services";
import SubmitEnquiry from "@/components/home/SubmitEnquiry";
import Testimonial from "@/components/home/Testimonial";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Services />
      <CarDetailing />
      <AboutUs />
      <OnlineBooking />
      <SubmitEnquiry />
      <Testimonial />
    </div>
  );
};

export default Home;
