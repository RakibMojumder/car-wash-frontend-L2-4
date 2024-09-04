import Service from "../services/Service";
import { Button } from "../ui/button";
import Container from "../ui/Container";

const Services = () => {
  return (
    <Container>
      <section>
        <div className="grid grid-cols-4 gap-3 py-28">
          <div className="col-span-1 space-y-3">
            <h1 className="text-3xl font-semibold">
              Expert Car Detailing: From Luxury Brands to Your Everyday Ride in
              Sydney
            </h1>
            <p>
              We’re the official car detailing service provider for several of
              Sydney’s high-end car dealerships including Audi, BMW, Porsche and
              Volkswagen, and we bring our industry experience to the consumer
              market delivering premium services to luxury and enthusiast car
              owners like you.
            </p>
            <p>
              Furthermore, we take pride in our versatility and inclusivity,
              offering our top-tier detailing services to all makes and models
              of vehicles, not just high-end cars. Regardless of what you drive,
              our team is equipped with the skills and tools to make your
              vehicle look its absolute best.
            </p>
            <Button>Book now</Button>
          </div>
          <Service />
          <Service />
          <Service />
        </div>

        <div className="grid grid-cols-4 gap-3 pb-28">
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </section>
    </Container>
  );
};

export default Services;
