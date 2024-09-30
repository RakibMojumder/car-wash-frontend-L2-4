import carWashingVideo from "@/assets/videos/car-washing.mp4";
import VideoPlayer from "../VideoPlayer";
import BannerText from "../BannerText";

const Header = () => {
  return (
    <section className="relative">
      <VideoPlayer src={carWashingVideo} controls={false} />
      <div className="absolute inset-0 z-40">
        <div className="mt-5 md:mt-10">
          <BannerText X="12%" Y="50%">
            Fast
          </BannerText>
          <BannerText X="20%" Y="50%">
            Friendly
          </BannerText>
          <BannerText X="21.5%" Y="50%">
            Flawless
          </BannerText>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-100 md:w-2/3 lg:w-1/2 pr-2 pl-4 sm:pl-5 md:pl-10 lg:pl-12">
            Experience top-notch car care with our eco-friendly washes and
            detailing services. Whether you need a quick clean or a full detail,
            we’ll make your vehicle shine like new. Book your appointment today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
