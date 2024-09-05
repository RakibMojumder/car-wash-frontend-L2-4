import Container from "@/components/ui/Container";
import VideoPlayer from "@/components/VideoPlayer";
import serviceVideo from "@/assets/videos/services-video/videoplayback.webm";
import serviceImage from "@/assets/images/services/Service-1.jpg";
import { Button } from "@/components/ui/button";

const ServiceDetails = () => {
  return (
    <div>
      <VideoPlayer src={serviceVideo} controls={false} />
      <Container>
        <div className="py-28">
          <h1 className="text-4xl font-bold uppercase text-center">
            WHEEL SCRATCH REPAIRS
          </h1>

          <div className="grid grid-cols-2 gap-10 mt-14">
            <div className="max-h-[420px]">
              <img
                src={serviceImage}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="space-y-7">
              <h3 className="text-xl font-semibold">
                Expert Wheel Scratch Repair
              </h3>
              <h1 className="text-5xl font-semibold">
                Restoring Quality and Brilliance to your Wheels
              </h1>
              <p className="text-muted">
                Our qualified staff will inspect your rims and advise you on the
                best form of repair.
              </p>
              <p className="text-muted">
                Repairing alloy wheels, in our Zetland carwash centre, can take
                as little as 45 minutes per wheel. No need for expensive wheel
                replacement or the inconvenience of leaving the car for days, as
                new techniques allow us to repair almost all types of alloy
                wheel on the spot.
              </p>

              <Button className="py-6 px-14">Book now</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
