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
<<<<<<< HEAD
      <img src={logo} alt="" className="min-w-24 w-24" />
      <h2 className="font-bold uppercase text-sm hidden md:block">
        GlossyWheels
      </h2>
=======
      <img src={logo} alt="" className="w-24" />
      <h2 className="font-bold uppercase text-sm">GlossyWheels</h2>
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
    </div>
  );
};

export default Logo;
