import AdminOverview from "@/pages/admin/AdminOverview";
import Booking from "@/pages/admin/Booking";
import Services from "@/pages/admin/Services";
import Slots from "@/pages/admin/Slots";
import UserManagement from "@/pages/admin/UserManagement";

export const adminPaths = [
  {
    path: "/admin",
    element: <AdminOverview />,
  },
  {
    name: "Overview",
    path: "over-view",
    element: <AdminOverview />,
  },
  {
    name: "Booking",
    path: "booking",
    element: <Booking />,
  },
  {
    name: "Slots",
    path: "slots",
    element: <Slots />,
  },
  {
    name: "Services",
    path: "services",
    element: <Services />,
  },
  {
    name: "Users",
    path: "users",
    element: <UserManagement />,
  },
];
