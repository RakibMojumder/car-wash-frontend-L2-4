import carAnimation from "@/assets/lottie/car-animation.json";
import Lottie from "lottie-react";

const DashLoader = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="size-80 md:size-[400px]">
        <Lottie animationData={carAnimation} loop></Lottie>
      </div>
    </div>
  );
};

export default DashLoader;
