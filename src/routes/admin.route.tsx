import AdminOverview from "@/pages/admin/AdminOverview";
import Booking from "@/pages/admin/Booking";
import Enquires from "@/pages/admin/Enquires";
import Services from "@/pages/admin/Services";
import Slots from "@/pages/admin/Slots";
import Users from "@/pages/admin/Users";

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
    name: "Services",
    path: "services",
    element: <Services />,
  },
  {
    name: "Users",
    path: "users",
    element: <Users />,
  },
  {
    name: "Enquires",
    path: "enquires",
    element: <Enquires />,
  },
  {
    name: "Slots",
    path: "slots",
    element: <Slots />,
  },
];
