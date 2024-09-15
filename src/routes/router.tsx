import AuthLayout from "@/components/layout/AuthLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Booking from "@/pages/Booking";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ServiceDetails from "@/pages/ServiceDetails";
import generateRoute from "@/utils/generateRoute";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.route";
import { userPaths } from "./user.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services/:serviceName",
        element: <ServiceDetails />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: generateRoute(adminPaths),
  },
  {
    path: "/user",
    element: <DashboardLayout />,
    children: generateRoute(userPaths),
  },
]);

export default router;
