const isCountDownNeedToStart = (date: string, time: string) => {
  const bookingDate = new Date(`${date}T${time}:00`);
  const currentDate = new Date(Date.now());
  const diff = bookingDate.getTime() - currentDate.getTime();

  return diff > 0;
};

export default isCountDownNeedToStart;
