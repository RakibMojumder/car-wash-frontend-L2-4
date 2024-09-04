import logo from "@/assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="flex flex-col justify-center items-center">
      <img src={logo} alt="" className="w-28" />
      <h2 className="font-bold uppercase text-sm">GlossyWheels</h2>
    </Link>
  );
};

export default Logo;
