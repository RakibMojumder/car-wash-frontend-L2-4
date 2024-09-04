import serviceImgFrom from "@/assets/images/service-image.webp";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import DatePicker from "@/components/ui/DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>();

  const handleBookService = () => {
    navigate("/booking");
  };

  return (
    <Container>
      <div className="grid grid-cols-12 items-start gap-6 pt-10 pb-28">
        <div className="col-span-7 overflow-y-auto relative">
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
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4 bg-primary text-white p-5 space-y-5">
          <p>
            Duration: <span className="font-semibold">60</span> minutes
          </p>
          <p>
            Price: <span className="font-semibold">$100</span>
          </p>
          <form onSubmit={handleBookService} className="space-y-5">
            <DatePicker date={date} setDate={setDate} />
            <Select>
              <SelectTrigger className="w-full bg-white text-black">
                <SelectValue placeholder="Select a slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full text-black bg-white hover:bg-gray-100 uppercase">
              Book a service
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetails;
