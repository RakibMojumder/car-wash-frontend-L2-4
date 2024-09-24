import paymentSuccess from "@/assets/lottie/payment-succeses.json";
import Loader from "@/components/loader/Loader";
import { Button } from "@/components/ui/button";
import { useGetBookingQuery } from "@/redux/features/booking/bookingApi";
import Lottie from "lottie-react";
import { Link, Navigate, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { transactionId } = useParams();
  const { data, isLoading } = useGetBookingQuery(transactionId);

  if (isLoading) return <Loader />;

  if (!data?.success) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="w-1/2 mx-auto mt-5 text-center">
      <Lottie animationData={paymentSuccess} loop={false} />
      <div className="space-y-3 -mt-10">
        <p className="text-xl font-medium text-muted">
          Your payment of{" "}
          <strong className="text-primary">
            ${data?.data?.service?.price}
          </strong>{" "}
          was successful and all the details has been sent to your registered
          email{" "}
          <strong className="text-primary">
            {data?.data?.customer?.email}
          </strong>
          .
        </p>
        <h5 className="font-medium">
          Transaction Id -{" "}
          <strong className="text-lg">{data?.data?.transactionId}</strong>
        </h5>

        <div className="text-center">
          <Link to={"/"}>
            <Button className="bg-primary text-white after:hover:bg-transparent">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
