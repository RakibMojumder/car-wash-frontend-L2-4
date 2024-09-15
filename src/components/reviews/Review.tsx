import { CarouselItem } from "../ui/carousel";
import userImg from "@/assets/images/car.jpg";
import { formatDistanceToNow } from "date-fns";
import { MdStar } from "react-icons/md";

type TUser = {
  firstName: string;
  lastName: string;
  profile?: string;
};

export type TReview = {
  _id: string;
  review: string;
  rating: number;
  user: TUser;
  createdAt: Date;
};

type TReviewProps = {
  review: TReview;
};

const Review = ({ review }: TReviewProps) => {
  return (
    <CarouselItem className="md:basis-1/2 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-primary shadow-[0px_0px_6px_#ddd]">
      <div className="space-y-5 pt-6">
        <img
          src={review.user?.profile ? review.user.profile : userImg}
          alt=""
          className="size-16 rounded-full"
        />
        <div>
          <h2 className="text-primary font-semibold text-xl">
            {review.user.firstName} {review.user.lastName}
          </h2>
          <div className="flex justify-between items-center pr-6">
            <h5 className="text-sm text-muted">
              {formatDistanceToNow(review.createdAt, {
                addSuffix: true,
                includeSeconds: true,
              })}
            </h5>
            <div className="flex items-center">
              {[...Array(review.rating)].map((_, idx) => (
                <MdStar key={idx} size={16} />
              ))}
            </div>
          </div>
        </div>
        <p>{review.review}</p>
      </div>
    </CarouselItem>
  );
};

export default Review;
