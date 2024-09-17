import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import verifyToken from "@/utils/verifyToken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  children: children,
  role,
}: {
  children: ReactNode;
  role: string;
}) => {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to={"/auth/login"} replace={true} />;
  }

  const user = verifyToken(token);

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/auth/login" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
