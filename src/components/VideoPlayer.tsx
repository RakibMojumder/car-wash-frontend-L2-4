import ReactPlayer from "react-player";

type TVideoPlayerProps = {
  src: string;
  controls: boolean;
};

const VideoPlayer = ({ src, controls }: TVideoPlayerProps) => {
  return (
    <div className="">
      <div className="relative pt-[56.25%]">
        <ReactPlayer
          url={src}
          width="100%"
          height="100%"
          controls={controls}
          muted={true}
          playing={true}
          loop={true}
          className="absolute left-0 top-0"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
