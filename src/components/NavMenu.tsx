import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import NavMenuItem from "./NavMenuItem";
import { TService } from "./services/Service";
<<<<<<< HEAD
import Loader from "./Loader";
=======
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

const NavMenu = () => {
  const { isLoading, isError, error, data } = useGetAllServicesQuery(null);

  if (isError) {
    console.log(error);
  }

<<<<<<< HEAD
  if (isLoading) return <Loader />;

  return (
    <div className="h-full hidden lg:block">
=======
  if (isLoading) return;

  return (
    <div className="h-full">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
      <ul className="flex items-center h-full">
        {data?.data?.map((service: TService) => (
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
