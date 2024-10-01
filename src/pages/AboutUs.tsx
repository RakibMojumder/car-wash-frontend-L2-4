import video from "@/assets/videos/car-washing.mp4";
import VideoPlayer from "@/components/VideoPlayer";
import blackCar from "@/assets/images/black-car.webp";
import carWashing from "@/assets/images/car-washing.webp";
import Container from "@/components/ui/Container";
import BannerText from "@/components/BannerText";

const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <VideoPlayer src={video} controls={false} />
        <BannerText />
      </div>
      <Container>
        <div className="py-20">
          <h1 className="text-4xl text-center font-semibold text-primary mb-10">
            Why Choose us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <img
                src={blackCar}
                alt="car image"
                className="w-full h-auto md:h-[480px] object-center"
              />
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold uppercase">About us</h3>
              <h1 className="text-5xl font-medium text-primary">
                Sydney's Premier Car Detailing Service Providers
              </h1>
              <p>
                We’re the official car detailing service provider for several of
                Sydney’s high end car dealerships including Audi, BMW, Porche
                and Volkswagen, and we bring our industry experience to the
                consumer market delivering premium services to luxury and
                enthusiast car owners like you.
              </p>
              <p>
                With 20 years of success and counting, our passion-driven,
                professionally-trained team are determined to deliver excellence
                in every job and to every client, driver, enthusiast, showroom
                or dealsership alike. You can trust Fine Shine to provide
                quality service and results at competitive prices.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="space-y-5">
              <h1 className="text-5xl font-medium text-primary">
                Our Customer Service Guarantee
              </h1>
              <p>
                We use the highest quality products available in the market and
                use the latest methods to ensure your car comes out looking its
                absolute best.
              </p>
              <p>
                Come in and enjoy our free valet service, wifi and comfortable
                lounge in the stunning East Village complex.
              </p>
              <p>
                Your satisfaction and ensuing faith in our products and services
                are our pride and passion. We deliver our services with a
                quality guarantee and look forward to becoming your trusted
                comprehensive car care provider.
              </p>
            </div>
            <div>
              <img
                src={carWashing}
                alt="car image"
                className="w-full h-auto md:h-[480px] object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
