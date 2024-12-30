import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { RxCalendar } from "react-icons/rx";
import { Dispatch } from "react";
import { PopoverClose } from "@radix-ui/react-popover";

type TDatePickerProps = {
  date: Date | undefined;
  setDate: Dispatch<React.SetStateAction<Date | undefined>>;
};

const DatePicker = ({ date, setDate }: TDatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left normal-case text-base font-semibold px-3 border border-b-2 shadow-none border-primary",
            !date && "text-muted-foreground"
          )}
        >
          <RxCalendar className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <PopoverClose>
          <Calendar
            fromDate={new Date()}
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            required
          />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
