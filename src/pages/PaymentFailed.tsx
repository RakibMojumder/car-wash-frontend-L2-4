import paymentFailed from "@/assets/lottie/payment-failed.json";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="w-1/2 mx-auto mt-5 text-center">
      <Lottie animationData={paymentFailed} loop={false} />
      <div className="space-y-3 -mt-10">
        <p className="text-xl font-medium text-muted">
          Your transaction has failed due to some technical error. Please try
          again.
        </p>

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

export default PaymentFailed;
