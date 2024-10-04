import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { BsInfoCircleFill } from "react-icons/bs";

const LoginCredentials = () => {
  return (
    <div className="text-end">
      <Popover>
        <PopoverTrigger>
          <BsInfoCircleFill size={24} />
        </PopoverTrigger>
        <PopoverContent className="space-y-5">
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
