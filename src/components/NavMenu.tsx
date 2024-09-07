import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import NavMenuItem from "./NavMenuItem";
import { TService } from "./services/Service";

const NavMenu = () => {
  const { isLoading, isError, error, data } = useGetAllServicesQuery(null);

  if (isError) {
    console.log(error);
  }

  if (isLoading) return;

  return (
    <div className="h-full">
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
