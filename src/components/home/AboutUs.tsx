import Container from "../ui/Container";
import AboutUsModal from "./AboutUsModal";

const AboutUs = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-28 md:px-5 xl:px-0">
        <AboutUsModal />
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Sydney's Leading Ceramic Coating Specialists
          </h2>
          <h1 className="text-5xl font-semibold">
            Protecting Cars For The Past 20 Years
          </h1>
          <p className="my-3">
            One of the <strong className="italic">HIGHEST GRADE SERUMS</strong>{" "}
            available, <strong className="italic">GTECHNIQ ACCREDITED</strong>{" "}
            professional staff and a{" "}
            <strong className="italic">DEDICATED CERAMIC COATING BAY</strong>{" "}
            with <strong className="italic">INDUSTRIAL LIGHTING</strong> are but
            a few of the quality controls we implement to ensure the flawless
            application of your car’s ceramic protection.
          </p>
          <p>
            Your satisfaction and ensuing faith in our products and services are
            our pride and passion. We deliver our services with a quality
            guarantee and look forward to becoming your trusted comprehensive
            car detailer and care services provider
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
