import Service from "@/components/services/Service";
import Container from "@/components/ui/Container";

const Services = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(10)].map((_, index) => (
          <Service key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Services;
