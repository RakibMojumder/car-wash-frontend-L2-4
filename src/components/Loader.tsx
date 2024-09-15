import carAnimation from "@/assets/lottie/car-animation.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 min-h-screen bg-white flex justify-center items-center z[9999]">
      <div className="size-80 md:size-[450px]">
        <Lottie animationData={carAnimation} loop />
      </div>
    </div>
  );
};

export default Loader;
