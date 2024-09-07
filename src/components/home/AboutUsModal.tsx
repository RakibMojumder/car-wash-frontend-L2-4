import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { MdOutlinePlayCircle } from "react-icons/md";
import serviceImage from "@/assets/images/services/Ceramic Coating.jpg";

const AboutUsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-96 relative cursor-pointer">
          <img
            src={serviceImage}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <MdOutlinePlayCircle
            fill="#fff"
            className="size-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl h-[90%] bg-transparent border-none">
        <div>
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/RnCIzGUnXUg?si=SJhj4wKbblIiefdi"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutUsModal;
