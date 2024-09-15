import Container from "@/components/ui/Container";
import VideoPlayer from "@/components/VideoPlayer";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { useGetSingleServicesQuery } from "@/redux/features/services/serviceApi";
import BookingModal from "@/components/BookingModal";
import Loader from "@/components/Loader";
=======
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useGetSingleServicesQuery } from "@/redux/features/services/serviceApi";
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const param = serviceName?.replace(/-/g, " ");
  const { isLoading, data } = useGetSingleServicesQuery(param);

<<<<<<< HEAD
  if (isLoading) {
    return <Loader />;
  }
=======
  if (isLoading) return;
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

  return (
    <div>
      <VideoPlayer src={data?.data?.video} controls={false} />
      <Container>
<<<<<<< HEAD
        <div className="py-28 md:px-5 xl:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8">
            <h1 className="col-span-2 lg:col-span-1 justify-self-start text-4xl font-bold uppercase text-center">
              {data?.data?.name}
            </h1>
            <h1 className="col-span-1 lg:justify-self-center">
              Charges:{" "}
              <span className="text-5xl font-bold">${data?.data?.price}</span>
            </h1>
            <h1 className="col-span-1 justify-self-end">
              Duration:{" "}
              <span className="text-5xl font-bold">{data?.data?.duration}</span>{" "}
              min
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
=======
        <div className="py-28">
          <h1 className="text-4xl font-bold uppercase text-center">
            {data?.data?.name}
          </h1>

          <div className="grid grid-cols-2 gap-10 mt-14">
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
            <div className="max-h-[420px]">
              <img
                src={data?.data?.image}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="space-y-7">
              <h3 className="text-xl font-semibold">
                {data?.data?.shortTitle}
              </h3>
              <h1 className="text-5xl font-semibold">{data?.data?.title}</h1>
              <p className="text-muted">{data?.data?.description}</p>

<<<<<<< HEAD
              <BookingModal service={data?.data} />
=======
              <Button className="py-6 px-14">Book now</Button>
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
