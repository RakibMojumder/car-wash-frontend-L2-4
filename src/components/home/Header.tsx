import carWashingVideo from "@/assets/videos/car-washing.mp4";
import VideoPlayer from "../VideoPlayer";

const Header = () => {
  return (
    <div>
      <VideoPlayer src={carWashingVideo} controls={false} />
    </div>
  );
};

export default Header;
