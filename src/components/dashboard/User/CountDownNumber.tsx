type TCountDownNumberTypes = {
  value: number | undefined;
  label: string;
};

const CountDownNumber = ({ value, label }: TCountDownNumberTypes) => {
  return (
    <div className="w-[70px] bg-red-600 text-white text-center">
      <div className="inline-block w-full bg-primary text-4xl px-1 py-2">
        {value?.toString().padStart(2, "0")}
      </div>
      <h4 className="text-center text-xs py-0.5 font-normal">{label}</h4>
    </div>
  );
};

export default CountDownNumber;
