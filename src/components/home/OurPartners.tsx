import getPartnersImages from "@/data/partners";
import { InfiniteSlider } from "../ui/InfiniteSlider";

const OurPartners = () => {
  const partnersImages = getPartnersImages();

  return (
    <div className="pb-28 lg:pb-40">
      <h1 className="text-4xl font-bold text-center">Our Partners</h1>
      <p className="text-center font-medium">Official Service Providers for</p>
      <InfiniteSlider durationOnHover={75} gap={24} className="mt-10">
        {partnersImages.map((image) => (
          <img
            key={image.id}
            src={image.imageSrc}
            alt="Partners image"
            className="aspect-square w-[120px]"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default OurPartners;
