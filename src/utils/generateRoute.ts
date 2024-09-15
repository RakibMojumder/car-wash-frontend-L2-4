import { TPaths } from "@/types";

const generateRoute = (paths: TPaths[]) => {
  return paths.map((path) => ({
    path: `${path.path}`,
    element: path.element,
  }));
};

export default generateRoute;
