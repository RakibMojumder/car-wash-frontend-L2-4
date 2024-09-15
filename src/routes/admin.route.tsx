import AdminOverview from "@/pages/admin/AdminOverview";
import Booking from "@/pages/admin/Booking";
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
    name: "User Management",
    path: "user-management",
    element: <UserManagement />,
  },
];
