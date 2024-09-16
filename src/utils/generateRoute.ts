import { TPath } from "@/types";

const generateRoute = (paths: TPath[]) => {
  return paths.map((path) => ({
    path: `${path.path}`,
    element: path.element,
  }));
};

export default generateRoute;
