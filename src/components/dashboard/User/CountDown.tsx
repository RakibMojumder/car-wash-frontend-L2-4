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
    <div>
      <div className="w-full text-2xl font-medium text-center py-5">
        <span className="text-6xl font-bold">
          {countDown?.days.toString().padStart(2, "0")}
        </span>
        Days<span className="text-6xl">{" : "}</span>
        <span className="text-6xl font-bold">
          {countDown?.hours.toString().padStart(2, "0")}
        </span>
        Hours <span className="text-6xl">{" : "}</span>
        <span className="text-6xl font-bold">
          {countDown?.minutes.toString().padStart(2, "0")}
        </span>
        Minutes<span className="text-6xl">{" : "}</span>
        <span className="text-6xl font-bold">
          {countDown?.seconds.toString().padStart(2, "0")}
        </span>
        Secondes
      </div>
      <h2 className="text-2xl text-center font-semibold uppercase mt-10">
        Times remaining for your upcoming booking
      </h2>
    </div>
  );
};

export default CountDown;
