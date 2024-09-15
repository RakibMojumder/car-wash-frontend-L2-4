import { useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.route";
import { userPaths } from "@/routes/user.route";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import generateNavItems from "@/utils/generateNavItem";

const DashNavbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isAdmin = user?.role === "admin";

  return (
    <div className="border-b px-5 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="space-x-5">
        {isAdmin
          ? generateNavItems(adminPaths, "admin")
          : generateNavItems(userPaths, "user")}
      </div>
      <div className="flex items-center gap-x-5">
        <Input
          placeholder="Search Here..."
          className="w-80 border border-primary/25 placeholder:text-muted placeholder:text-sm"
        />
        <Button size={"lg"} className="h-9">
          Logout
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashNavbar;
