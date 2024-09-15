import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import Loader from "../Loader";
import { NavLink } from "react-router-dom";
import { TService } from "../services/Service";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";
import { motion as m } from "framer-motion";

const MobileNavbar = () => {
  const token = useAppSelector((state) => state.auth.token);
  const { isLoading, isError, error, data } = useGetAllServicesQuery(null);

  if (isError) {
    console.log(error);
  }

  if (isLoading) return <Loader />;
  return (
    <m.div
      initial={{ height: 0 }}
      animate={{
        height: "auto",
        transition: { duration: 0.4 },
      }}
      exit={{ height: 0, transition: { duration: 0.4 } }}
      className="absolute top-full right-0 w-full p-4 md:p-8 bg-white/60 backdrop-blur overflow-hidden"
    >
      <ul className="space-y-5">
        {data?.data?.map((service: TService) => (
          <li key={service._id}>
            <NavLink
              to={`/services/${service.name.replace(/\s+/g, "-")}`}
              className="font-semibold"
            >
              {service.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to={"/about-us"} className="font-semibold">
            About us
          </NavLink>
        </li>

        <li>
          <Button className="bg-neutral-200/50 backdrop-blur-3xl block sm:hidden">
            {token ? (
              <NavLink to={"/dashboard"} className="text-sm">
                Dashboard
              </NavLink>
            ) : (
              <NavLink to={"/auth/login"}>Login</NavLink>
            )}
          </Button>
        </li>
      </ul>
    </m.div>
  );
};

export default MobileNavbar;
