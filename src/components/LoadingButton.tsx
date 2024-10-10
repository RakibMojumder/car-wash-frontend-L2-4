import Lottie from "lottie-react";
import { Button } from "./ui/button";
import loadingAnimation from "@/assets/lottie/loading-animation.json";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TLoadingButtonProps = {
  isLoading: boolean;
  label: ReactNode;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
  handler?: () => void;
};

const LoadingButton = ({
  isLoading,
  className,
  label,
  variant = "default",
  handler,
}: TLoadingButtonProps) => {
  return (
    <Button
      type="submit"
      variant={variant}
      onClick={handler}
      className={cn(`w-full ${isLoading && "after:hover:w-1.5"}`, className)}
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
