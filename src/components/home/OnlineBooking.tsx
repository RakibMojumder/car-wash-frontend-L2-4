import { Button } from "../ui/button";
import Container from "../ui/Container";
import bookingMobile from "@/assets/images/booking-mobile.webp";

const OnlineBooking = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-28 md:px-5 lg:px-16">
        <div className="order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">Online Bookings</h1>
            <p>
              Our Online Ordering system allows you to book in your car for all
              our care care services
            </p>
            <Button className="py-8 px-12">Book now</Button>
          </div>
          <div className="h-[1px] w-full bg-primary my-8"></div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">
              Join Our Loyalty Program - Rewardle
            </h1>
            <p>
              Get our Rewardle APP Earn points which can be redeemed on future
              purchases
            </p>

            <div className="flex flex-wrap gap-5">
              <Button className="py-8 px-12">App store</Button>
              <Button className="py-8 px-12">Google play</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <img
            src={bookingMobile}
            alt=""
            className="w-80 md:w-96 max-w-96 hover:-translate-x-3 hover:-translate-y-3 transition-all duration-450 ease-out"
          />
        </div>
      </div>
    </Container>
  );
};

export default OnlineBooking;
