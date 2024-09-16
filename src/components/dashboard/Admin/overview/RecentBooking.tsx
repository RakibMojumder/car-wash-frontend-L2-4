import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecentBooking = () => {
  return (
    <div>
      <h2 className="font-semibold mb-7">Recent Bookings</h2>
      <div className="space-y-5">
        {[...Array(6)].map((_, indx) => (
          <div key={indx} className="flex justify-between items-start">
            <div className="flex items-center gap-x-5">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-semibold">Rakib Ahmed</h3>
                <h4 className="text-sm text-muted">Rakib@gmail.com</h4>
              </div>
            </div>
            <div className="font-semibold">$220</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBooking;
