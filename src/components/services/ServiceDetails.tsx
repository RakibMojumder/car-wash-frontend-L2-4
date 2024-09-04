import serviceImgFrom from "@/assets/images/service-image.webp";
import useClickOutside from "@/hooks/useClickoutside";
import { Dispatch, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

type TServiceDetailsProps = {
  service: string;
  setShow: Dispatch<React.SetStateAction<boolean>>;
};

const ServiceDetails = ({ service, setShow }: TServiceDetailsProps) => {
  const targetREf = useRef<HTMLDivElement>(null);
  useClickOutside(targetREf, () => setShow((prev) => !prev));

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-end">
      <div
        ref={targetREf}
        className="max-w-xl p-5 bg-white overflow-y-auto relative"
      >
        <div className="size-12 bg-red-500 absolute top-0 left-5 z-10">
          <RxCross2 size={32} />
        </div>
        <div>
          <img src={serviceImgFrom} alt="" />
        </div>
        <div>
          <h2>Consultation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            soluta vitae praesentium quibusdam consequuntur maiores nostrum,
            aperiam libero nam, fugiat fuga? Quia consequuntur quibusdam
            molestiae quo est inventore at beatae, unde quod. Ratione saepe
            doloribus dolores error accusamus id odit eaque. Blanditiis sit a
            quo? Culpa inventore cumque corporis dolor!
          </p>
          <p>
            Duration: <span className="font-semibold">60</span>
          </p>
          <p>
            Price: <span className="font-semibold">$100</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
