import { useAppSelector } from "@/redux/hooks";
import AddReview from "../reviews/AddReview";
import Container from "../ui/Container";
import ReviewCarousel from "./ReviewCarousel";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Testimonial = () => {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <div className="my-28">
      <Container>
        <h1 className="text-3xl font-bold text-center uppercase">
          Testimonials
        </h1>
        <p className="text-center font-medium">What Our Customers Are Saying</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-10 lg:gap-3 pb-28 lg:w-[85%] mx-auto">
          <div className="lg:col-span-8 order-2 lg:order-1 md:p-5">
            <ReviewCarousel />
          </div>
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-8 md:p-8">
            <h1 className="text-4xl font-medium">
              Our <br /> Wall of Love
            </h1>
            <p>
              Enquire today about our services, or advice on how to best care
              for your car. Use the form to get in touch or call or email us
              directly. Check out our frequently asked questions for more
              information.
            </p>

            {token ? (
              <AddReview />
            ) : (
              <Button>
                <Link to={"/auth/login"}>Add Review</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
