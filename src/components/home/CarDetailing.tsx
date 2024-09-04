import getCarDetails from "@/data/carDetails";
import Container from "../ui/Container";

const CarDetailing = () => {
  const carDetails = getCarDetails();

  return (
    <Container>
      <div className="py-28">
        <h1 className="text-4xl font-bold text-center">
          Car Detailing in Sydney | GlossyWheels
        </h1>

        <div className="grid grid-cols-3 gap-8 mt-8">
          {carDetails.map((item) => (
            <div className="pr-12 space-y-3">
              <h3 className="text-xl font-semibold pl-5 relative before:absolute before: top-0 before:left-0 before:h-full before:w-0.5 before:bg-primary">
                {item.title}
              </h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CarDetailing;
