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
            "w-full justify-start text-black text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <RxCalendar className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          fromDate={new Date()}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
