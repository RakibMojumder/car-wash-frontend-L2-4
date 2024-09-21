import MyBookings from "@/pages/user/MyBookings";
import Profile from "@/pages/user/Profile";
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
  {
    name: "Profile",
    path: "profile",
    element: <Profile />,
  },
];
