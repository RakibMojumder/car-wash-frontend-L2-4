import carWashingVideo from "@/assets/videos/car-washing.mp4";
import VideoPlayer from "../VideoPlayer";
import BannerText from "../BannerText";

const Header = () => {
  return (
    <section className="relative max-h-[calc(100vh_-_90px)] overflow-hidden">
      <VideoPlayer src={carWashingVideo} controls={false} />
      <BannerText />
    </section>
  );
};

export default Header;
