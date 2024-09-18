import MyBookings from "@/pages/user/MyBookings";
import UserOverview from "@/pages/user/UserOverview";

export const userPaths = [
  {
    path: "/user",
    element: <UserOverview />,
  },
  {
    name: "Overview",
    path: "over-view",
    element: <UserOverview />,
  },
  {
    name: "My Bookings",
    path: "my-bookings",
    element: <MyBookings />,
  },
];
