import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import Service, { TService } from "../services/Service";
import { Button } from "../ui/button";
import Container from "../ui/Container";

const Services = () => {
  const { isLoading, data } = useGetAllServicesQuery(null);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <Container>
      <section className="py-28">
        <h1 className="text-4xl font-bold text-center">
          Our Car Services | GlossyWheels
        </h1>
        <div className="grid grid-cols-4 gap-x-3 gap-y-20 mt-12">
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
          {data?.data?.map((service: TService) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Services;
