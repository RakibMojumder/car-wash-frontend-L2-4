import DashLoader from "@/components/loader/DashLoader";
import { useGetAllSlotsQuery } from "@/redux/features/slot/slotApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TSlot } from "@/components/services/AvailableSlots";

type TServiceSlots = {
  _id: string;
  slots: TSlot[];
};

const Slots = () => {
  const { data, isLoading } = useGetAllSlotsQuery(null);

  if (isLoading) {
    return <DashLoader />;
  }

  return (
    <div className="flex justify-center items-center pb-20">
      <Accordion type="single" collapsible className="w-1/2">
        <h2 className="text-2xl text-center font-semibold mb-5">
          All Slots for services
        </h2>
        <div>
          {data?.data?.map((service: TServiceSlots) => (
            <AccordionItem key={service._id} value={service._id}>
              <AccordionTrigger className="font-semibold">
                {service._id}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {service.slots.map((slot, indx: number) => (
                    <div key={indx}>
                      {slot.startTime}={slot.endTime}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default Slots;
