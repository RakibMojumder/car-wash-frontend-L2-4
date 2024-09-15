import carWashingVideo from "@/assets/videos/car-washing.mp4";
import VideoPlayer from "../VideoPlayer";

const Header = () => {
  return (
    <section>
      <VideoPlayer src={carWashingVideo} controls={false} />
    </section>
  );
};

export default Header;
