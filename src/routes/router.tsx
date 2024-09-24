import AuthLayout from "@/components/layout/AuthLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ServiceDetails from "@/pages/ServiceDetails";
import generateRoute from "@/utils/generateRoute";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.route";
import { userPaths } from "./user.route";
import PrivateRoute from "@/components/layout/PrivateRoute";
import PaymentSuccess from "@/pages/PaymentSuccess";
import PaymentFailed from "@/pages/PaymentFailed";
import NotFound from "@/pages/NotFound";
import AboutUs from "@/pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "services/:serviceName",
        element: <ServiceDetails />,
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
    element: (
      <PrivateRoute role="admin">
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: generateRoute(adminPaths),
  },
  {
    path: "/user",
    element: (
      <PrivateRoute role="user">
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: generateRoute(userPaths),
  },
  {
    path: "payment-success/:transactionId",
    element: <PaymentSuccess />,
  },
  {
    path: "payment-failed",
    element: <PaymentFailed />,
  },
]);

export default router;
