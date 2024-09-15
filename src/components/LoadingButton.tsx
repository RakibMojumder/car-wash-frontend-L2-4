import Lottie from "lottie-react";
import { Button } from "./ui/button";
import loadingAnimation from "@/assets/lottie/loading-animation.json";
import { ReactNode } from "react";

type TLoadingButtonProps = {
  isLoading: boolean;
  label: ReactNode;
  handler?: () => void;
};

const LoadingButton = ({ isLoading, label, handler }: TLoadingButtonProps) => {
  return (
    <Button
      type="submit"
      onClick={handler}
      className={`w-full ${isLoading && "after:hover:w-1.5"}`}
    >
      {isLoading ? (
        <div className="size-20">
          <Lottie animationData={loadingAnimation} loop />
        </div>
      ) : (
        <span>{label}</span>
      )}
    </Button>
  );
};

export default LoadingButton;
