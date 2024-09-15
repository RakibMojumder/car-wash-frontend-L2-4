import getCarDetails from "@/data/carDetails";
import Container from "../ui/Container";

const CarDetailing = () => {
  const carDetails = getCarDetails();

  return (
    <Container>
<<<<<<< HEAD
      <section className="py-28 md:px-5 xl:px-0">
=======
      <section className="py-28">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
        <h1 className="text-4xl font-bold text-center">
          Car Detailing in Sydney | GlossyWheels
        </h1>

<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-8 mt-12">
=======
        <div className="grid grid-cols-3 gap-8 mt-12">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
          {carDetails.map((item) => (
            <div key={item.id} className="pr-12 space-y-3">
              <h3 className="text-xl font-semibold pl-5 relative before:absolute before: top-0 before:left-0 before:h-full before:w-0.5 before:bg-primary">
                {item.title}
              </h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default CarDetailing;
