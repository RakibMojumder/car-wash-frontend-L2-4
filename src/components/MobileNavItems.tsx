import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import Loader from "./loader/Loader";
import { TService } from "./services/Service";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppSelector } from "@/redux/hooks";

const MobileNavItems = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { isLoading, isError, error, data } = useGetAllServicesQuery(null);

  if (isError) {
    console.log(error);
  }

  if (isLoading) return <Loader />;

  return (
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
          {user?.email ? (
            <NavLink to={`/${user.role}`} className="text-sm">
              Dashboard
            </NavLink>
          ) : (
            <NavLink to={"/auth/login"}>Login</NavLink>
          )}
        </Button>
      </li>
    </ul>
  );
};

export default MobileNavItems;
