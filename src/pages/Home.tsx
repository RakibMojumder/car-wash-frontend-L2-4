import CarDetailing from "@/components/home/CarDetailing";
import Header from "@/components/home/Header";
import Services from "@/components/home/Services";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Services />
      <CarDetailing />
    </div>
  );
};

export default Home;
