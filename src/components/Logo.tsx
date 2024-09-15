import logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";

type TLogoProps = {
  className?: string;
};

const Logo = ({ className }: TLogoProps) => {
  return (
    <div
      className={`${cn(
        "flex flex-col justify-center items-center",
        className
      )}`}
    >
      <img src={logo} alt="" className="min-w-24 w-24" />
      <h2 className="font-bold uppercase text-sm hidden md:block">
        GlossyWheels
      </h2>
    </div>
  );
};

export default Logo;
