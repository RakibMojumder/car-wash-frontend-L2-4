import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import NavMenuItem from "./NavMenuItem";
import { TService } from "./services/Service";
import Loader from "./loader/Loader";

const NavMenu = () => {
  const { isLoading, isError, error, data } = useGetAllServicesQuery(null);

  if (isError) {
    console.log(error);
  }

  if (isLoading) return <Loader />;

  return (
    <div className="h-full hidden lg:block">
      <ul className="flex items-center h-full">
        {data?.data?.slice(0, 7).map((service: TService) => (
          <NavMenuItem
            key={service._id}
            href={`/services/${service.name.replace(/\s+/g, "-")}`}
            label={service.name}
          />
        ))}
        <NavMenuItem href="/about-us" label="About us" />
      </ul>
    </div>
  );
};

export default NavMenu;
