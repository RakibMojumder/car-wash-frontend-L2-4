import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TBannerProps = {
  children: ReactNode;
  className?: string;
  X: string;
  Y: string;
};

const AnimatedText = ({ children, X, Y, className }: TBannerProps) => {
  return (
    <svg viewBox="0 0 1350 100">
      <text
        x={X}
        y={Y}
        strokeDashoffset={"600px"}
        fill="#eee"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="white"
        strokeWidth={2}
        className={cn("svg-text text-8xl uppercase font-extrabold", className)}
      >
        {children}
      </text>
    </svg>
  );
};

export default AnimatedText;
