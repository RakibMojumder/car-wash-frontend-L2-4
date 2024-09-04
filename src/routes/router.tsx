import MainLayout from "@/components/layout/MainLayout";
import Booking from "@/pages/Booking";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ServiceDetails from "@/pages/ServiceDetails";
import Services from "@/pages/Services";
import { createBrowserRouter } from "react-router-dom";

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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:serviceName",
        element: <ServiceDetails />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
