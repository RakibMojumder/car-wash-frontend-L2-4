import { Button } from "../ui/button";
import Container from "../ui/Container";
import ReviewCarousel from "./ReviewCarousel";

const Testimonial = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold text-center uppercase">Testimonials</h1>
      <p className="text-center">What Our Customers Are Saying</p>
      <div className="grid grid-cols-12 items-center gap-3 pb-28 w-[85%] mx-auto">
        <div className="col-span-8 p-5">
          <ReviewCarousel />
        </div>
        <div className="col-span-4 space-y-8 p-8">
          <h1 className="text-4xl font-medium">
            Our <br /> Wall of Love
          </h1>
          <p>
            Enquire today about our services, or advice on how to best care for
            your car. Use the form to get in touch or call or email us directly.
            Check out our frequently asked questions for more information.
          </p>
          <Button>Add Review</Button>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
