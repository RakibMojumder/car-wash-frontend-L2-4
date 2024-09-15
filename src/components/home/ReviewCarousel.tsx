import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetAllReviewsQuery } from "@/redux/features/review/reviewApi";
import Review, { TReview } from "../reviews/Review";

const ReviewCarousel = () => {
  const { data, isLoading } = useGetAllReviewsQuery(null);

  if (isLoading) return;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="gap-5">
        {data?.data?.map((review: TReview) => (
          <Review key={review._id} review={review} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReviewCarousel;
