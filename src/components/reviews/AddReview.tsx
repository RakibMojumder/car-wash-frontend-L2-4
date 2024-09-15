import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Rating } from "react-simple-star-rating";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useAddReviewMutation } from "@/redux/features/review/reviewApi";
import LoadingButton from "../LoadingButton";

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [addReview, { isLoading, isSuccess, isError, error }] =
    useAddReviewMutation();

  const handleSubmit = async () => {
    if (rating < 1) {
      return toast.error("rating is required");
    }

    if (!review) {
      return toast.error("review is required");
    }

    await addReview({ rating, review });
  };

  if (isSuccess) {
    toast.success("Review added successfully");
  }

  if (isError) {
    toast.error(error?.data.message);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Review</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex justify-center my-5">
            <Rating
              iconsCount={5}
              fillColor="black"
              SVGclassName="inline"
              initialValue={rating}
              onClick={(value) => setRating(value)}
            />
          </div>
          <Textarea
            placeholder="Enter your review"
            rows={6}
            className="border-2"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <div>
              <LoadingButton
                handler={handleSubmit}
                isLoading={isLoading}
                label={"Add Review"}
              />
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddReview;
