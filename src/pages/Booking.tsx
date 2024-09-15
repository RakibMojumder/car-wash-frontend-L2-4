import Container from "@/components/ui/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 items-start gap-6 pt-10 pb-28">
        <div className="col-span-7 overflow-y-auto relative">
          <div>{/* <img src={serviceImgFrom} alt="" /> */}</div>
          <div className="space-y-5">
            <h2>Consultation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              soluta vitae praesentium quibusdam consequuntur maiores nostrum,
              aperiam libero nam, fugiat fuga? Quia consequuntur quibusdam
              molestiae quo est inventore at beatae, unde quod.
            </p>
            <p>
              Duration: <span className="font-semibold">60</span> minutes
            </p>
            <p>
              Price: <span className="font-semibold">$100</span>
            </p>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4 bg-primary text-white p-5 space-y-5">
          <div className="w-full">
            <form onSubmit={() => {}} className="space-y-5">
              <div>
                <Label htmlFor="name">Enter your name</Label>
                <Input
                  className="placeholder:text-white"
                  type="text"
                  id="name"
                  placeholder="Jon Doe"
                  // {...register("name")}
                />
              </div>
              <div>
                <Label htmlFor="email">Enter your email</Label>
                <Input
                  className="placeholder:text-white"
                  type="email"
                  id="email"
                  placeholder="abc@gmail.com"
                  // {...register("email")}
                />
              </div>
              <div>
                <Label htmlFor="phone">Enter your phone</Label>
                <Input
                  className="placeholder:text-white"
                  type="number"
                  id="phone"
                  placeholder="018*******"
                  // {...register("phone")}
                />
              </div>
              <Button
                type="submit"
                className="w-full text-black bg-white hover:bg-gray-100 uppercase"
              >
                Pay now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
