import Container from "@/components/ui/Container";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useGetSingleServicesQuery } from "@/redux/features/services/serviceApi";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const param = serviceName?.replace(/-/g, " ");
  const { isLoading, data } = useGetSingleServicesQuery(param);

  if (isLoading) return;

  return (
    <div>
      <VideoPlayer src={data?.data?.video} controls={false} />
      <Container>
        <div className="py-28">
          <h1 className="text-4xl font-bold uppercase text-center">
            {data?.data?.name}
          </h1>

          <div className="grid grid-cols-2 gap-10 mt-14">
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

              <Button className="py-6 px-14">Book now</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
