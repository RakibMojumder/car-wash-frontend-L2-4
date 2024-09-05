import AboutUs from "@/components/home/AboutUs";
import CarDetailing from "@/components/home/CarDetailing";
import Header from "@/components/home/Header";
import OnlineBooking from "@/components/home/OnlineBooking";
import Services from "@/components/home/Services";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Services />
      <CarDetailing />
      <AboutUs />
      <OnlineBooking />
    </div>
  );
};

export default Home;
