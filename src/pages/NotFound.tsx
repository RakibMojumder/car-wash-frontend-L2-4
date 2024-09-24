import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-svh flex justify-center items-center">
      <div className="w-1/3 text-center">
        <h1 className="text-9xl font-bold text-muted">404</h1>
        <p className="text-muted font-medium">
          The page you are looking for was moved, removed, rename or might never
          existed
        </p>
        <div className="mt-5">
          <Link to={"/"}>
            <Button>Back Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
