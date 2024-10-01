import carWashingVideo from "@/assets/videos/car-washing.mp4";
import VideoPlayer from "../VideoPlayer";
import BannerText from "../BannerText";

const Header = () => {
  return (
    <section className="relative">
      <VideoPlayer src={carWashingVideo} controls={false} />
      <BannerText />
    </section>
  );
};

export default Header;
