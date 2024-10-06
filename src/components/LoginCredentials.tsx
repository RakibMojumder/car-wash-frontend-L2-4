import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const LoginCredentials = () => {
  return (
    <div className="w-full">
      <Popover>
        <PopoverTrigger className="w-full">
          <Button className="after:bg-[#E21F28] w-full">
            Demo credentials
          </Button>
        </PopoverTrigger>
        <PopoverContent className="space-y-5 w-full">
          <div className="border p-3 bg-neutral-100">
            <h3 className="font-semibold">User Demo Credentials:</h3>
            <h5>
              <span className="font-medium">Email:</span> rakib@gmail.com
            </h5>
            <h5>
              <span className="font-medium">Password:</span> password
            </h5>
          </div>

          <div className="border p-3 bg-neutral-100">
            <h3 className="font-semibold">Admin Demo Credentials:</h3>
            <h5>
              <span className="font-medium">Email:</span> rakib.ahmed@gmail.com
            </h5>
            <h5>
              <span className="font-medium">Password:</span> password
            </h5>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LoginCredentials;
