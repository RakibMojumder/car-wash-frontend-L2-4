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
<<<<<<< HEAD
import { PopoverClose } from "@radix-ui/react-popover";
=======
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0

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
<<<<<<< HEAD
            "w-full justify-start text-left font-normal border-0 border-b-2 shadow-none border-primary",
=======
            "w-full justify-start text-black text-left font-normal",
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
            !date && "text-muted-foreground"
          )}
        >
          <RxCalendar className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
<<<<<<< HEAD
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
=======
        <Calendar
          fromDate={new Date()}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
