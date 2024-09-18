import { useEffect, useState } from "react";

type TCountDown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type TCountDownProps = {
  date: string;
  time: string;
};

const initialCountDown = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const CountDown = ({ date, time }: TCountDownProps) => {
  const bookingDate = new Date(`${date}T${time}:00`);
  const [countDown, setCountDown] = useState<TCountDown | undefined>(
    initialCountDown
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentDate = new Date(Date.now());
      const diff = bookingDate.getTime() - currentDate.getTime();

      // Time calculations
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountDown({ days, hours, minutes, seconds });

      if (diff < 0) {
        setCountDown(initialCountDown);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="w-full border">
      {countDown?.days}d {countDown?.hours}h {countDown?.minutes}m{" "}
      {countDown?.seconds}s
    </div>
  );
};

export default CountDown;
