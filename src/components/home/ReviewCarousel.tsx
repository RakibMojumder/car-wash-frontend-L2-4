import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import userImg from "@/assets/images/services/Service-1.jpg";
import { MdStar } from "react-icons/md";

const ReviewCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-primary shadow-[0px_0px_6px_#ddd]"
          >
            <div className="space-y-5 pt-6">
              <img src={userImg} alt="" className="size-16 rounded-full" />
              <div>
                <h2 className="text-primary font-semibold text-xl">
                  Rakib Ahmed
                </h2>
                <div className="flex justify-between items-center pr-6">
                  <h5 className="text-sm text-muted">2 days ago</h5>
                  <div className="flex items-center">
                    <MdStar size={16} />
                    <MdStar size={16} />
                    <MdStar size={16} />
                    <MdStar size={16} />
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                voluptas eum consequatur dolores magni quos blanditiis. Commodi
                facere molestiae magnam quae deserunt quaerat. Quia blanditiis
                nulla nihil magnam delectus laudantium.
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReviewCarousel;
