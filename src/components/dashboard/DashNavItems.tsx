import { TPath } from "@/types";
import DashNavItem from "./DashNavItem";

type TDsashNavItemProps = {
  paths: TPath[];
  role: string;
};

const DashNavItems = ({ paths, role }: TDsashNavItemProps) => {
  const filteredPaths = paths.filter((path) => path.name);

  return (
    <>
      {filteredPaths.map((path) => (
        <DashNavItem key={path.path} path={path} to={`/${role}/${path.path}`} />
      ))}
    </>
  );
};

export default DashNavItems;
