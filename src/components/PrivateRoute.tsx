import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children: children }: { children: ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to={"/auth/login"} replace={true} />;
  }

  return children;
};

export default PrivateRoute;
