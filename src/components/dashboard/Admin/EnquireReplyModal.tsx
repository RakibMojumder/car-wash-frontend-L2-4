import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useSendReplyMutation } from "@/redux/features/enquire/enquireApi";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

type TEnquireReplyModalProps = {
  id: string;
};

const EnquireReplyModal = ({ id }: TEnquireReplyModalProps) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [sendReply, { isLoading }] = useSendReplyMutation();

  const submitReply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await sendReply({ id, text }).unwrap();

    if (res?.success) {
      toast.success(res?.message);
      setOpen(false);
    } else {
      toast.error("Failed to reply");
    }
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="w-full">
          <Button variant="outline" size="sm" className="rounded-none">
            Replay
          </Button>
        </PopoverTrigger>
        <PopoverContent className="space-y-5 min-w-72 border shadow-none bg-neutral-50">
          <form onSubmit={submitReply} className="space-y-5">
            <Textarea
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your message"
              className="w-full h-40 font-normal bg-white border border-neutral-300 placeholder:font-normal"
            />
            <Button
              variant="outline"
              size="lg"
              className="h-9 px-5 rounded-none text-sm bg-primary hover:bg-primary text-white hover:text-white"
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default EnquireReplyModal;
