import { useNavigate } from "react-router-dom";

export type TService = {
  _id: string;
  name: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  image: string;
  video: string;
  price: number;
  duration: number;
  isDeleted: boolean;
};

type TServiceProps = {
  service: TService;
};

const Service = ({ service }: TServiceProps) => {
  const navigate = useNavigate();

  const handleNavigate = (serviceName: string) => {
    navigate(`/services/${serviceName.replace(/\s+/g, "-")}`);
  };

  return (
    <div
      onClick={() => handleNavigate(service.name)}
      className="col-span-1 h-[480px] relative group overflow-hidden cursor-pointer"
    >
      <div className="relative w-full h-full">
        <img
          src={service.image}
          alt="service image"
          className="w-full h-full relative z-10"
        />
        <div className="absolute top-0 left-0 inset-0 opacity-30 bg-gradient-to-b to-30% from-white to-primary z-20"></div>
      </div>
      <div className="w-full relative h-auto z-30">
        <div className="flex flex-col justify-end p-4 h-full w-full text-white space-y-3 -translate-y-16 group-hover:-translate-y-full transition-all duration-450 ease-out">
          <h1 className="text-2xl font-semibold uppercase">{service.name}</h1>
          <p className="opacity-0 group-hover:opacity-100 duration-450 transition-opacity">
            {service.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
