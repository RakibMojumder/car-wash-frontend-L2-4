import serviceImage from "@/assets/images/services/Service-1.jpg";

const Service = () => {
  return (
    <div className="col-span-1 h-[480px] relative group overflow-hidden cursor-pointer">
      <div className="relative w-full h-full">
        <img
          src={serviceImage}
          alt="service image"
          className="w-full h-full relative z-10"
        />
        <div className="absolute top-0 left-0 inset-0 opacity-30 bg-gradient-to-b to-30% from-white to-primary z-20"></div>
      </div>
      <div className="w-full relative h-auto z-30">
        <div className="flex flex-col justify-end p-4 h-full w-full text-white space-y-3 -translate-y-16 group-hover:-translate-y-full transition-all duration-450 ease-out">
          <h1 className="text-2xl font-semibold">CERAMIC COATING</h1>
          <p className="opacity-0 group-hover:opacity-100 duration-450 transition-opacity">
            Fine Shine uses Gtechniq's Crystal Serum and Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Autem, asperiores!,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
